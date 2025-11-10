"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface ServiceItem {
  code: string;
  name: string;
  price: number;
}

interface LabServicesData {
  [category: string]: ServiceItem[];
}

export default function LabCalculatorPage() {
  const [labServices, setLabServices] = useState<LabServicesData>({});
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Record<string, ServiceItem>>({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set(["Аллергология и иммунология"]));

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch("/data/lab-services.json");
        const data: LabServicesData = await res.json();
        setLabServices(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Add CSS for hiding scrollbars
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const categories = useMemo(() => Object.keys(labServices), [labServices]);

  const allServices = useMemo(() => {
    return Object.values(labServices).flat();
  }, [labServices]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allServices.filter((s) => s.name.toLowerCase().includes(q));
  }, [allServices, query]);

  const total = useMemo(() => Object.values(selected).reduce((sum, s) => sum + s.price, 0), [selected]);

  function toggle(item: ServiceItem) {
    setSelected((prev) => {
      const next = { ...prev };
      if (next[item.name]) delete next[item.name];
      else next[item.name] = item;
      return next;
    });
  }

  function clearSelected() {
    setSelected({});
  }

  function removeSelected(itemName: string) {
    setSelected((prev) => {
      const next = { ...prev };
      delete next[itemName];
      return next;
    });
  }

  function toggleCategory(category: string) {
    setSelectedCategories((prev) => {
      // If clicking the same category, deselect it
      if (prev.has(category)) {
        return new Set();
      }
      // Otherwise, select only this category
      return new Set([category]);
    });
  }

  const categoriesToDisplay = useMemo(() => {
    if (selectedCategories.size === 0) {
      return [];
    }
    return categories.filter(cat => selectedCategories.has(cat));
  }, [categories, selectedCategories]);

  async function generatePDF() {
    // Create a hidden div with the PDF content
    const pdfContent = document.createElement('div');
    pdfContent.style.position = 'absolute';
    pdfContent.style.left = '-9999px';
    pdfContent.style.top = '0';
    pdfContent.style.width = '210mm';
    pdfContent.style.padding = '20px';
    pdfContent.style.fontFamily = 'Arial, sans-serif';
    pdfContent.style.fontSize = '12px';
    pdfContent.style.lineHeight = '1.4';
    pdfContent.style.backgroundColor = 'white';
    
    // Add logo
    const logoImg = document.createElement('img');
    logoImg.src = '/images/general/S.webp';
    logoImg.style.width = '30px';
    logoImg.style.height = '30px';
    logoImg.style.marginRight = '10px';
    logoImg.style.verticalAlign = 'middle';
    
    // Header
    const header = document.createElement('div');
    header.style.marginBottom = '20px';
    header.style.borderBottom = '1px solid #000';
    header.style.paddingBottom = '10px';
    
    const clinicName = document.createElement('span');
    clinicName.textContent = 'Альтамед-с';
    clinicName.style.fontSize = '18px';
    clinicName.style.fontWeight = 'bold';
    clinicName.style.color = '#10b981';
    
    header.appendChild(logoImg);
    header.appendChild(clinicName);
    
    // Title
    const title = document.createElement('h1');
    title.textContent = 'Список анализов:';
    title.style.textAlign = 'center';
    title.style.fontSize = '16px';
    title.style.marginBottom = '20px';
    
    // Table
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.marginBottom = '20px';
    
    // Table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.style.backgroundColor = '#f5f5f5';
    headerRow.style.fontWeight = 'bold';
    
    const headers = ['Код анализа', 'Наименование вида анализа', 'Сроки выполнения', 'Цена*'];
    headers.forEach(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
      th.style.border = '1px solid #000';
      th.style.padding = '8px';
      th.style.textAlign = 'left';
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Table body
    const tbody = document.createElement('tbody');
    const selectedItems = Object.values(selected);
    
    selectedItems.forEach((item) => {
      const row = document.createElement('tr');
      
      const code = document.createElement('td');
      code.textContent = item.code || '-';
      code.style.border = '1px solid #000';
      code.style.padding = '8px';
      
      const name = document.createElement('td');
      name.textContent = item.name;
      name.style.border = '1px solid #000';
      name.style.padding = '8px';
      
      const terms = document.createElement('td');
      terms.textContent = '2-3 дня';
      terms.style.border = '1px solid #000';
      terms.style.padding = '8px';
      
      const price = document.createElement('td');
      price.textContent = `${item.price} руб.`;
      price.style.border = '1px solid #000';
      price.style.padding = '8px';
      
      row.appendChild(code);
      row.appendChild(name);
      row.appendChild(terms);
      row.appendChild(price);
      tbody.appendChild(row);
    });
    
    // Total row
    const totalRow = document.createElement('tr');
    totalRow.style.backgroundColor = '#f5f5f5';
    totalRow.style.fontWeight = 'bold';
    
    const emptyCell1 = document.createElement('td');
    emptyCell1.style.border = '1px solid #000';
    emptyCell1.style.padding = '8px';
    
    const emptyCell2 = document.createElement('td');
    emptyCell2.style.border = '1px solid #000';
    emptyCell2.style.padding = '8px';
    
    const totalLabel = document.createElement('td');
    totalLabel.textContent = 'Итого:';
    totalLabel.style.border = '1px solid #000';
    totalLabel.style.padding = '8px';
    
    const totalPrice = document.createElement('td');
    totalPrice.textContent = `${total.toLocaleString('ru-RU')} руб.`;
    totalPrice.style.border = '1px solid #000';
    totalPrice.style.padding = '8px';
    
    totalRow.appendChild(emptyCell1);
    totalRow.appendChild(emptyCell2);
    totalRow.appendChild(totalLabel);
    totalRow.appendChild(totalPrice);
    tbody.appendChild(totalRow);
    
    table.appendChild(tbody);
    
    // General info
    const generalInfo = document.createElement('div');
    generalInfo.style.marginBottom = '20px';
    generalInfo.style.fontSize = '10px';
    generalInfo.textContent = 'Предварительная запись на исследования не требуется. Исключение составляют мазки и соскобы. Взятие биоматериала для них выполняет врач - необходима запись к специалисту. Анализы можно сдать в наших клиниках в часы их работы.';
    
    // Contact info
    const contactInfo = document.createElement('div');
    contactInfo.style.marginBottom = '20px';
    
    const contactText = document.createElement('p');
    contactText.textContent = 'Если вы не знаете какие анализы вам необходимы, запишитесь к врачу на консультацию по телефону:';
    contactText.style.marginBottom = '5px';
    
    const phone = document.createElement('p');
    phone.textContent = '+7 (495) 255-44-50';
    phone.style.fontWeight = 'bold';
    
    contactInfo.appendChild(contactText);
    contactInfo.appendChild(phone);
    
    // Disclaimer
    const disclaimer = document.createElement('div');
    disclaimer.style.fontSize = '8px';
    disclaimer.style.marginBottom = '20px';
    disclaimer.textContent = '* Администрация клиники принимает все меры по своевременному обновлению размещенного на сайте прайс-листа, однако во избежание возможных недоразумений, советуем уточнять стоимость услуг в регистратуре или контакт-центре. Размещенный прайс не является офертой. Медицинские услуги оказываются на основании договора.';
    
    // Promotion
    const promotion = document.createElement('div');
    promotion.style.fontSize = '12px';
    
    const promoTitle = document.createElement('h3');
    promoTitle.textContent = 'Действует акция: Скидки на анализы';
    promoTitle.style.fontWeight = 'bold';
    promoTitle.style.marginBottom = '10px';
    
    const promoList = document.createElement('ul');
    promoList.style.marginLeft = '20px';
    
    const promo1 = document.createElement('li');
    promo1.textContent = 'Понедельник, Среда, Пятница - 10%';
    
    const promo2 = document.createElement('li');
    promo2.textContent = 'Воскресенье - 15%';
    
    promoList.appendChild(promo1);
    promoList.appendChild(promo2);
    
    promotion.appendChild(promoTitle);
    promotion.appendChild(promoList);
    
    // Assemble content
    pdfContent.appendChild(header);
    pdfContent.appendChild(title);
    pdfContent.appendChild(table);
    pdfContent.appendChild(generalInfo);
    pdfContent.appendChild(contactInfo);
    pdfContent.appendChild(disclaimer);
    pdfContent.appendChild(promotion);
    
    // Add to DOM temporarily
    document.body.appendChild(pdfContent);
    
    try {
      // Convert to canvas
      const canvas = await html2canvas(pdfContent, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      });
      
      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save('список-анализов.pdf');
    } finally {
      // Clean up
      document.body.removeChild(pdfContent);
    }
  }

  return (
    <div className="flex flex-col min-h-full bg-white overflow-x-hidden">
      {/* Breadcrumbs */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-emerald-600">Услуги</Link>
            <span>/</span>
            <Link href="/services/lab-tests" className="hover:text-emerald-600">Лабораторные анализы</Link>
            <span>/</span>
            <span className="text-gray-900">Калькулятор анализов</span>
          </nav>
        </div>
      </section>

      <section className="pb-2">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl md:text-4xl font-bold">Калькулятор стоимости анализов</h1>
            <Link href="#" className="hidden md:block whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-5 py-3 font-medium">Выбрать клинику</Link>
          </div>
        </div>
      </section>

      {/* Search and results */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="flex gap-3 items-stretch mb-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Начните вводить название анализа"
              className="flex-1 border rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="px-6 py-3 rounded-full bg-emerald-500 text-white font-medium">Искать</button>
          </div>

          {/* Mobile filters - horizontal scrollable */}
          <div className="lg:hidden mb-4">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="text-gray-700 font-medium">Выберите разделы</span>
            </div>
            <div className="overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
              <div className="flex gap-3" style={{ width: 'max-content' }}>
                {categories.map((category) => {
                  const isSelected = selectedCategories.has(category);
                  return (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`flex-shrink-0 px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                        isSelected
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                      {isSelected && (
                        <svg className="w-4 h-4 inline ml-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Selected analyses summary - mobile version */}
          {Object.keys(selected).length > 0 && (
            <div className="lg:hidden mb-4 bg-pink-50 border border-pink-200 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Выбрано анализов</span>
                  <span className="font-bold text-lg">{Object.keys(selected).length}</span>
                </div>
                <button
                  onClick={clearSelected}
                  className="text-gray-600 hover:text-gray-800 underline text-sm flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Очистить
                </button>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-800">Стоимость выбранных анализов</span>
                <span className="font-bold text-lg text-red-600">{total.toLocaleString('ru-RU')} руб.</span>
              </div>
              <button 
                onClick={() => setShowModal(true)}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-full font-medium transition-colors"
              >
                Посмотреть выбранные анализы
              </button>
            </div>
          )}

          {/* Desktop selected analyses summary */}
          {Object.keys(selected).length > 0 && (
            <div className="hidden lg:flex mt-4 bg-pink-50 border border-pink-200 rounded-2xl p-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="text-gray-800">
                  <span>Выбрано анализов </span>
                  <span className="font-bold text-lg">{Object.keys(selected).length}</span>
                </div>
                <div className="text-gray-800">
                  <span>Стоимость выбранных анализов </span>
                  <span className="font-bold text-lg text-red-600">{total.toLocaleString('ru-RU')} руб.</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={clearSelected}
                  className="text-gray-600 hover:text-gray-800 underline flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Очистить
                </button>
                <button 
                  onClick={() => setShowModal(true)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium transition-colors"
                >
                  Посмотреть выбранные анализы
                </button>
              </div>
            </div>
          )}

          {/* Layout with sidebar and content */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block bg-gray-50 rounded-2xl p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Категории анализов
              </h2>
              <nav>
                <ul className="space-y-2">
                  {categories.map((category) => {
                    const isSelected = selectedCategories.has(category);
                    const count = labServices[category]?.length || 0;
                    return (
                      <li key={category}>
                        <button
                          onClick={() => toggleCategory(category)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                            isSelected
                              ? 'bg-emerald-500 text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className="flex-1">{category}</span>
                          <span className={`text-xs ml-2 ${isSelected ? 'text-white' : 'text-gray-500'}`}>
                            {count}
                          </span>
                          {isSelected && (
                            <svg className="w-4 h-4 ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            {/* Content */}
            <main>
              {loading && <div className="text-gray-500">Загрузка прайса…</div>}
              
              {/* Search results */}
              {query && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {filtered.map((item) => {
                    const active = !!selected[item.name];
                    return (
                      <div
                        key={item.name}
                        className={`p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                          active
                            ? 'border-emerald-500 bg-emerald-50 shadow-md'
                            : 'border-gray-200 bg-white hover:shadow-sm'
                        }`}
                        onClick={() => toggle(item)}
                      >
                        <h3 className="font-medium text-gray-800 text-sm mb-1">{item.name}</h3>
                        <p className="text-emerald-600 font-semibold text-sm">{item.price} руб.</p>
                      </div>
                    );
                  })}
                  {filtered.length === 0 && (
                    <p className="text-gray-600 col-span-full">Ничего не найдено.</p>
                  )}
                </div>
              )}

              {/* Category sections */}
              {!query && selectedCategories.size === 0 && (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Выберите категорию анализов</h3>
                  <p className="text-gray-500">Выберите одну или несколько категорий из списка слева, чтобы просмотреть доступные анализы</p>
                </div>
              )}
              {!query && categoriesToDisplay.map((category) => (
                <section key={category} id={category.replace(/\s+/g, '-').toLowerCase()} className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {labServices[category]?.map((item) => {
                      const active = !!selected[item.name];
                      return (
                        <div
                          key={item.name}
                          className={`p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                            active
                              ? 'border-emerald-500 bg-emerald-50 shadow-md'
                              : 'border-gray-200 bg-white hover:shadow-sm'
                          }`}
                          onClick={() => toggle(item)}
                        >
                          <h3 className="font-medium text-gray-800 text-sm mb-1">{item.name}</h3>
                          <p className="text-emerald-600 font-semibold text-sm">{item.price} руб.</p>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}

              {/* Selected analyses section */}
              {Object.keys(selected).length > 0 && (
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Выбранные анализы</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.values(selected).map((item) => (
                      <div
                        key={item.name}
                        className="p-4 border border-emerald-500 bg-emerald-50 rounded-xl shadow-md relative"
                      >
                        <button
                          onClick={() => removeSelected(item.name)}
                          className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                        >
                          ×
                        </button>
                        <h3 className="font-medium text-gray-800 text-sm mb-1 pr-6">{item.name}</h3>
                        <p className="text-emerald-600 font-semibold text-sm">{item.price} руб.</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Recommended complexes section */}
              {Object.keys(selected).length > 0 && (
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Рекомендованные комплексы</h2>
                  <div className="text-gray-600">
                    <p>Рекомендуемые комплексы будут добавлены позже.</p>
                  </div>
                </section>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* Floating cart summary */}
      {Object.keys(selected).length > 0 && (
        <div className="sticky bottom-0 bg-emerald-700 text-white p-4 z-20 shadow-lg">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span className="text-lg font-semibold">Выбрано анализов: {Object.keys(selected).length}</span>
            <span className="text-xl font-bold">Итого: {total.toLocaleString('ru-RU')} руб.</span>
            <div className="flex space-x-4">
              <button
                onClick={clearSelected}
                className="bg-white text-emerald-700 px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Очистить
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full font-medium transition-colors">
                Записаться на прием
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-x-hidden">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 md:p-6 border-b">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Список анализов</h2>
              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors flex-shrink-0"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 md:p-6 overflow-x-hidden">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-hidden">
                <table className="w-full table-fixed">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2 font-semibold text-gray-700 w-[40%]">Наименование</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-700 w-[15%]">Код анализа</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-700 w-[15%]">Сроки</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-700 w-[20%]">Цены</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-700 w-[10%]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(selected).map((item) => (
                      <tr key={item.name} className="border-b">
                        <td className="py-3 px-2 text-gray-800 break-words">{item.name}</td>
                        <td className="py-3 px-2 text-gray-600 whitespace-nowrap">{item.code || '-'}</td>
                        <td className="py-3 px-2 text-gray-600 whitespace-nowrap">2-3 дня</td>
                        <td className="py-3 px-2 text-gray-800 font-semibold whitespace-nowrap">{item.price} руб.</td>
                        <td className="py-3 px-2">
                          <button
                            onClick={() => removeSelected(item.name)}
                            className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors flex-shrink-0"
                          >
                            ×
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {Object.values(selected).map((item) => (
                  <div key={item.name} className="bg-gray-50 rounded-xl p-4 border border-gray-200 relative">
                    <button
                      onClick={() => removeSelected(item.name)}
                      className="absolute top-3 right-3 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors flex-shrink-0"
                    >
                      ×
                    </button>
                    <div className="pr-10">
                      <h3 className="text-base font-semibold text-gray-900 mb-2 break-words">{item.name}</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-600">Код анализа:</span>
                          <span className="ml-2 text-gray-800 font-medium">{item.code || '-'}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Сроки:</span>
                          <span className="ml-2 text-gray-800 font-medium">2-3 дня</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-gray-600">Цена:</span>
                          <span className="ml-2 text-red-600 font-bold text-lg">{item.price} руб.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="mt-4 bg-pink-50 rounded-xl p-4">
                <div className="text-lg font-bold text-gray-900">
                  Итого: <span className="text-red-600">{total.toLocaleString('ru-RU')} руб.</span>
                </div>
              </div>


              {/* Important Notes */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <p className="text-gray-700 text-sm">
                  Предварительная запись на исследования не требуется. Исключение составляют мазки и соскобы. 
                  Взятие биоматериала для них выполняет врач - необходима запись к специалисту. 
                  Анализы можно сдать в наших клиниках в часы их работы. Выберите удобную по расположению.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6">
                <button 
                  onClick={generatePDF}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-xl font-medium transition-colors"
                >
                  Сохранить
                </button>
              </div>

              {/* Consultation */}
              <div className="mt-6 text-center">
                <p className="text-gray-700 mb-3">
                  Если вы не знаете какие анализы вам необходимы, запишитесь к врачу на консультацию.
                </p>
                <div className="bg-orange-50 rounded-xl p-4">
                  <p className="text-gray-800">
                    Скидки на анализы<br/>
                    Понедельник, Среда, Пятница - 10%<br/>
                    Воскресенье - 15%
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 text-xs text-gray-500">
                <p>
                  * Администрация клиники принимает все меры по своевременному обновлению размещенного на сайте прайс-листа, 
                  однако во избежание возможных недоразумений, рекомендуем уточнять стоимость и сроки выполнения исследований 
                  в регистратуре или контакт-центре. Размещенный прайс не является офертой. 
                  Медицинские услуги оказываются на основании договора.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
