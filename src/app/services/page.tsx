"use client";

import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export default function ServicesPage() {
  
  // Все медицинские услуги из меню
  const medicalServices = [
    {
      id: 'allergology',
      title: 'Аллергология',
      description: 'Диагностика и лечение аллергических заболеваний',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'gastroenterology',
      title: 'Гастроэнтерология',
      description: 'Лечение заболеваний желудочно-кишечного тракта',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'gynecology',
      title: 'Гинекология',
      description: 'Женское здоровье и репродуктивная медицина',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dermatology',
      title: 'Дерматология',
      description: 'Лечение заболеваний кожи, волос и ногтей',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'cardiology',
      title: 'Кардиология',
      description: 'Диагностика и лечение заболеваний сердца',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'laser-cosmetology',
      title: 'Лазерная косметология',
      description: 'Современные методы омоложения и коррекции',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'mammology',
      title: 'Маммология',
      description: 'Диагностика и лечение заболеваний молочных желез',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'neurology',
      title: 'Неврология',
      description: 'Лечение заболеваний нервной системы',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'otolaryngology',
      title: 'Отоларингология',
      description: 'Лечение заболеваний уха, горла и носа',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 1 0-15 0v5h5l-5-5 5-5h5v5z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'ophthalmology',
      title: 'Офтальмология',
      description: 'Диагностика и лечение заболеваний глаз',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'pediatrics',
      title: 'Педиатрия',
      description: 'Медицинская помощь детям',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'proctology',
      title: 'Проктология',
      description: 'Лечение заболеваний прямой кишки',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'surdology',
      title: 'Сурдология',
      description: 'Диагностика и лечение нарушений слуха',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 1 0-15 0v5h5l-5-5 5-5h5v5z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'dentistry',
      title: 'Стоматология',
      description: 'Лечение и профилактика стоматологических заболеваний',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'therapy',
      title: 'Терапия',
      description: 'Общая терапия и внутренние болезни',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'traumatology',
      title: 'Травматология',
      description: 'Лечение травм и повреждений опорно-двигательного аппарата',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'urology',
      title: 'Урология',
      description: 'Лечение заболеваний мочеполовой системы',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'surgery',
      title: 'Хирургия',
      description: 'Хирургические вмешательства',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5m0 0l9-5-9-5-9 5 9 5m0 0v6" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'endocrinology',
      title: 'Эндокринология',
      description: 'Лечение заболеваний эндокринной системы',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    // Диагностические услуги
    // Дополнительные услуги
    {
      id: 'psychology',
      title: 'Психология',
      description: 'Психологическая помощь',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: false
    },
    {
      id: 'psychotherapy',
      title: 'Психотерапия',
      description: 'Психотерапевтическое лечение',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: false
    },
    {
      id: 'carboxytherapy',
      title: 'Карбокситерапия',
      description: 'Лечение углекислым газом',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: false
    },
    {
      id: 'osteopathy',
      title: 'Остеопатия',
      description: 'Остеопатическое лечение',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: true
    },
    {
      id: 'physiotherapy',
      title: 'Физиотерапия',
      description: 'Физиотерапевтическое лечение',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: true
    },
    {
      id: 'family-psychology',
      title: 'Семейная психология',
      description: 'Семейное психологическое консультирование',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: false
    },
    {
      id: 'massage',
      title: 'Массаж',
      description: 'Лечебный массаж',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: false
    },
    {
      id: 'vacuum-massage',
      title: 'Вакуумный массаж',
      description: 'Вакуумно-массажная терапия',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: false
    },
    {
      id: 'bioresonance',
      title: 'Биорезонансная терапия',
      description: 'Биорезонансное лечение',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: false
    },
    {
      id: 'shockwave-therapy',
      title: 'Ударно-волновая терапия',
      description: 'УВТ лечение',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: true
    }
  ];

  // Первый контейнер - основные услуги
  const firstContainerServices = [
    'allergology', 'gastroenterology', 'gynecology', 'dermatology',
    'cardiology', 'laser-cosmetology', 'mammology', 'neurology',
    'otolaryngology', 'ophthalmology', 'pediatrics',
    'proctology', 'surdology', 'therapy', 'traumatology', 'dentistry',
    'urology', 'surgery', 'endocrinology'
  ];

  // Реабилитация - отдельная категория
  const rehabilitationServices = [
    'psychology', 'psychotherapy', 'carboxytherapy', 'osteopathy',
    'physiotherapy', 'family-psychology', 'massage', 'vacuum-massage',
    'bioresonance', 'shockwave-therapy'
  ];

  // Первый контейнер услуг
  const firstContainerData = medicalServices.filter(service => 
    firstContainerServices.includes(service.id)
  );

  // Реабилитация
  const rehabilitationData = medicalServices.filter(service => 
    rehabilitationServices.includes(service.id)
  );

  // Второй контейнер - остальные услуги
  const secondContainerData = medicalServices.filter(service => 
    !firstContainerServices.includes(service.id) && !rehabilitationServices.includes(service.id)
  );

  return (
    <div className="flex flex-col min-h-full bg-white overflow-x-hidden">
      {/* Первый контейнер услуг */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-items-center">
            {firstContainerData.map((service) => (
              service.id === 'allergology' ? (
                <Link key={service.id} href="/services/allergology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/allergoly.webp" 
                      alt="Аллергология" 
              className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
            />
            <div className="flex-1 px-2 md:px-4">
              <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                {service.title}
              </h3>
            </div>
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : service.id === 'gastroenterology' ? (
                <Link key={service.id} href="/services/gastroenterology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Gastroenterology.webp" 
                      alt="Гастроэнтерология" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : service.id === 'gynecology' ? (
                <Link key={service.id} href="/services/gynecology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Gynecology.webp" 
                      alt="Гинекология" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
                ) : service.id === 'dermatology' ? (
                <Link key={service.id} href="/services/dermatology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Dermatology.webp" 
                      alt="Дерматология" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : service.id === 'cardiology' ? (
                <Link key={service.id} href="/services/cardiology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Cardiology.webp" 
                      alt="Кардиология" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : service.id === 'laser-cosmetology' ? (
                <Link key={service.id} href="/services/laser-cosmetology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/laser cosmetology 1.webp" 
                      alt="Лазерная косметология" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : service.id === 'mammology' ? (
                <Link key={service.id} href="/services/mammology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/mammalogy.webp" 
                      alt="Маммология" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : service.id === 'neurology' ? (
                <Link key={service.id} href="/services/neurology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/images allergoly/nevrolog.webp" 
                      alt="Неврология" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
              ) : service.id === 'otolaryngology' ? (
                <Link key={service.id} href="/services/otolaryngology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Otolaryngology.webp" 
                      alt="Отоларингология" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
                ) : service.id === 'ophthalmology' ? (
                <Link key={service.id} href="/services/ophthalmology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Ophthalmology.webp" 
                      alt="Офтальмология" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
                ) : service.id === 'pediatrics' ? (
                <Link key={service.id} href="/services/pediatrics" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Pediatrician.webp" 
                      alt="Педиатрия" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
                ) : service.id === 'proctology' ? (
                <Link key={service.id} href="/services/proctology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Proctology.webp" 
                      alt="Проктология" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : service.id === 'surdology' ? (
                <Link key={service.id} href="/services/surdology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/Audiology.webp" 
                      alt="Сурдология" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : service.id === 'therapy' ? (
                <Link key={service.id} href="/services/therapy" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/terapiay 1.webp" 
                      alt="Терапия" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : service.id === 'traumatology' ? (
                <Link key={service.id} href="/services/traumatology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/travmatolog.webp" 
                      alt="Травматология" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : service.id === 'urology' ? (
                <Link key={service.id} href="/services/urology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/yrolog.webp" 
                      alt="Урология" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : service.id === 'surgery' ? (
                <Link key={service.id} href="/services/surgery" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/hirurg.webp" 
                      alt="Хирургия" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : service.id === 'endocrinology' ? (
                <Link key={service.id} href="/services/endocrinology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/endokrinjlog.webp" 
                      alt="Эндокринология" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : service.id === 'dentistry' ? (
                <Link key={service.id} href="/services/dentistry" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/yrolog.webp" 
                      alt="Стоматология" 
                      className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                    />
                    <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                <Link key={service.id} href={`/services/${service.id}`} className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <div className="w-16 md:w-20 h-full bg-white rounded-l-[20px] flex items-center justify-center">
                    <div className="group-hover:text-emerald-600 transition-colors duration-300">
                          {service.icon}
                        </div>
                      </div>
                  <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Акции */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Акции
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Кольпоскопия в подарок при первичном приёме акушера-гинеколога */}
            <Link href="/promo/promo-5" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-[300px] md:h-[377.22px] flex flex-col">
              <div className="h-[200px] md:h-[259.22px] relative flex-shrink-0">
                <img 
                  src="/images/yslugi/Colposcopy.webp" 
                  alt="Кольпоскопия" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[100px] md:h-[118px] bg-emerald-500 flex flex-col justify-between px-4 md:px-6 py-3 flex-grow">
                <h3 className="text-white font-semibold text-sm md:text-lg">Кольпоскопия в подарок</h3>
                <div className="md:hidden">
                  <button className="bg-white text-emerald-500 rounded-full px-4 py-1.5 text-xs font-medium hover:bg-gray-100 transition-colors">
                    Подробнее
                  </button>
                </div>
                <div className="hidden md:flex items-center justify-between">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Скидка для пенсионеров 10% на все услуги кроме стоматологии */}
            <Link href="/promo/promo-3" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-[300px] md:h-[377.22px] flex flex-col">
              <div className="h-[200px] md:h-[259.22px] relative flex-shrink-0">
                <img 
                  src="/images/yslugi/pensia 1.webp" 
                  alt="Скидка для пенсионеров" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[118px] bg-[#c49a68] flex flex-col justify-between px-4 md:px-6 py-3 flex-grow">
                <h3 className="text-white font-semibold text-sm md:text-lg">Скидка для пенсионеров 10%</h3>
                <div className="md:hidden">
                  <button className="bg-white text-[#c49a68] rounded-full px-4 py-1.5 text-xs font-medium hover:bg-gray-100 transition-colors">
                    Подробнее
                  </button>
                </div>
                <div className="hidden md:flex items-center justify-between">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-[#c49a68]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Скидки на компьютерную томографию */}
            <Link href="/promo/promo-1" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-[300px] md:h-[377.22px] flex flex-col">
              <div className="h-[200px] md:h-[259.22px] relative flex-shrink-0">
                <img 
                  src="/images/yslugi/KT.webp" 
                  alt="Компьютерная томография" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[118px] bg-[#69a0bd] flex flex-col justify-between px-4 md:px-6 py-3 flex-grow">
                <h3 className="text-white font-semibold text-sm md:text-lg">Скидки на КТ!</h3>
                <div className="md:hidden">
                  <button className="bg-white text-[#69a0bd] rounded-full px-4 py-1.5 text-xs font-medium hover:bg-gray-100 transition-colors">
                    Подробнее
                  </button>
                </div>
                <div className="hidden md:flex items-center justify-between">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-[#69a0bd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Скидки на анализы */}
            <Link href="/promo/promo-4" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-[300px] md:h-[377.22px] flex flex-col">
              <div className="h-[200px] md:h-[259.22px] relative flex-shrink-0">
                <img 
                  src="/images/slides/3-analizy.webp" 
                  alt="Скидки на анализы" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[118px] bg-orange-500 flex flex-col justify-between px-4 md:px-6 py-3 flex-grow">
                <h3 className="text-white font-semibold text-sm md:text-lg">СКИДКИ НА АНАЛИЗЫ</h3>
                <div className="md:hidden">
                  <button className="bg-white text-orange-500 rounded-full px-4 py-1.5 text-xs font-medium hover:bg-gray-100 transition-colors">
                    Подробнее
                  </button>
                </div>
                <div className="hidden md:flex items-center justify-between">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Диагностические услуги */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Диагностические услуги
          </h2>
          
          {/* Первый ряд - большие карточки с изображениями */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            {/* Аппаратная диагностика */}
            <Link href="/services/hardware-diagnostics" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-4 md:p-6">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/Hardware diagnostics.webp" 
                    alt="Аппаратная диагностика" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                    Аппаратная диагностика
                  </h3>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Лабораторные анализы */}
            <Link href="/services/lab-tests" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-4 md:p-6">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/Laboratory tests.webp" 
                    alt="Лабораторные анализы" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                    Лабораторные анализы
                  </h3>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Скрининг при беременности */}
            <Link href="/services/pregnancy-screening" className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-4 md:p-6">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src="/images/services/Screenshot_1835.png" 
                    alt="Скрининг при беременности" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                    Скрининг при беременности
                  </h3>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Второй ряд - маленькие карточки */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-4">
            {/* УЗИ */}
            <Link href="/services/ultrasound" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-3 md:p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                  УЗИ
                </h3>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-2 h-2 md:w-3 md:h-3 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            

            {/* КТ */}
            <Link href="/services/ct" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-3 md:p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                  КТ
                </h3>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-2 h-2 md:w-3 md:h-3 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Эндоскопия */}
            <Link href="/services/endoscopy" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-3 md:p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                  Эндоскопия
                </h3>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-2 h-2 md:w-3 md:h-3 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Рентген */}
            <Link href="/services/xray" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-3 md:p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                  Рентген
                </h3>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-2 h-2 md:w-3 md:h-3 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Функциональная диагностика */}
            <Link href="/services/functional-diagnostics" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-3 md:p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                  Функциональная диагностика
                </h3>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-2 h-2 md:w-3 md:h-3 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* Реабилитация */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Реабилитация
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-items-center">
            {rehabilitationData.map((service) => (
              service.id === 'carboxytherapy' ? (
                <Link key={service.id} href="/services/carboxytherapy" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/Carboxytherapy.webp" 
                    alt="Карбокситерапия" 
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'osteopathy' ? (
                <Link key={service.id} href="/services/osteopathy" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/Osteopathy.webp" 
                    alt="Остеопатия" 
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'physiotherapy' ? (
                <Link key={service.id} href="/services/physiotherapy" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/fizio.webp" 
                    alt="Физиотерапия" 
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'psychotherapy' ? (
                <Link key={service.id} href="/services/psychotherapy" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/yrolog.webp" 
                    alt="Психотерапия" 
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'psychology' ? (
                <Link key={service.id} href="/services/psychology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/famili.webp" 
                    alt="Психология" 
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'family-psychology' ? (
                <Link key={service.id} href="/services/family-psychology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/famili.webp" 
                    alt="Семейная психология" 
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'massage' ? (
                <Link key={service.id} href="/services/massage" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/massaj.webp" 
                    alt="Массаж" 
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'vacuum-massage' ? (
                <Link key={service.id} href="/services/vacuum-massage" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/vakum.webp" 
                    alt="Вакуумный массаж" 
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'bioresonance' ? (
                <Link key={service.id} href="/services/bioresonance" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/yrolog.webp" 
                    alt="Биорезонансная терапия" 
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'shockwave-therapy' ? (
                <Link key={service.id} href="/services/shockwave-therapy" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/yrolog.webp" 
                    alt="Ударно-волновая терапия" 
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <div
                  key={service.id}
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-2 md:p-4"
                >
                  <div className="flex items-center space-x-2 md:space-x-3 flex-1">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-emerald-50 group-hover:scale-110 transition-all duration-300 overflow-hidden">
                      <div className="group-hover:text-emerald-600 transition-colors duration-300 scale-75 md:scale-100">
                        {service.icon}
                      </div>
                      </div>
                      <div className="flex-1">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Additional physiotherapy procedures */}
      <section className="py-8 bg-gray-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">
            Дополнительные процедуры физиотерапии
          </h2>
          
          {/* Мобильная версия */}
          <div className="md:hidden space-y-4">
            <Link href="/services/lymph-e-massage" className="bg-[#DAF2FF] rounded-[20px] p-4 h-[140px] flex relative overflow-hidden">
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-bold">Пневмомассажер Лимфа-Э</h3>
                <button className="bg-white text-black rounded-full px-6 py-2 w-fit text-sm">
                  Подробнее
                </button>
              </div>
            </Link>
            
            <div className="grid grid-cols-2 gap-3">
              <Link href="/services/elgos-therapy" className="bg-[#FFD9E0] rounded-[20px] p-3 h-[140px] flex flex-col justify-between">
                <h3 className="text-sm font-semibold">Аппарат глубокой осцилляции «ЭЛГОС»</h3>
                <button className="bg-white text-black rounded-full px-4 py-1 w-fit text-xs">
                  Подробнее
                </button>
              </Link>
              
              <Link href="/services/tekar-therapy" className="bg-[#FADFFF] rounded-[20px] p-3 h-[140px] flex flex-col justify-between">
                <h3 className="text-sm font-semibold">Текар-терапия</h3>
                <button className="bg-white text-black rounded-full px-4 py-1 w-fit text-xs">
                  Подробнее
                </button>
              </Link>
              
              <Link href="/services/hilt-laser" className="bg-[#DBF0E9] rounded-[20px] p-3 h-[140px] flex flex-col justify-between">
                <h3 className="text-sm font-semibold">Высокоинтенсивный лазер HILT</h3>
                <button className="bg-white text-black rounded-full px-4 py-1 w-fit text-xs">
                  Подробнее
                </button>
              </Link>
              
              <Link href="/services/sis-magnetotherapy" className="bg-[#FFF6C1] rounded-[20px] p-3 h-[140px] flex flex-col justify-between">
                <h3 className="text-sm font-semibold">Высокоинтенсивная магнитотерапия (SIS)</h3>
                <button className="bg-white text-black rounded-full px-4 py-1 w-fit text-xs">
                  Подробнее
                </button>
              </Link>
            </div>
          </div>
          
          {/* Десктопная версия */}
          <div className="hidden md:flex flex-col lg:flex-row gap-6 max-w-full mx-auto">
            {/* Левый большой блок */}
            <Link href="/services/lymph-e-massage" className="bg-[#DAF2FF] rounded-[20px] w-full lg:w-[593px] lg:max-w-[593px] h-[300px] md:h-[374px] flex flex-shrink-0 relative overflow-hidden">
              <div className="p-6 md:p-8 flex flex-col justify-between z-10 w-full lg:w-[60%]">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Пневмомассажер Лимфа-Э</h3>
                </div>
                
                <button className="bg-white text-black rounded-full px-8 py-2 w-fit">
                  Подробнее
                </button>
              </div>
              
              <div className="hidden lg:block absolute bottom-0 right-0 h-full w-[40%]">
                <Image 
                  src="/images/yslugi/Pneumatic massager Lymfa-E.webp" 
                  alt="Пневмомассажер Лимфа-Э" 
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            
            {/* Правая колонка с 4 блоками */}
            <div className="flex flex-col gap-4 md:gap-6 flex-1 min-w-0 max-w-full">
              {/* Верхний ряд */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Блок 1 */}
                <Link href="/services/elgos-therapy" className="bg-[#FFD9E0] rounded-[20px] w-full md:w-[calc(50%-12px)] lg:w-[332px] lg:max-w-[332px] h-[175px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden flex-shrink-0">
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-0">
                    <Image 
                      src="/images/yslugi/Deep oscillation d2evice.webp" 
                      alt="Аппарат глубокой осцилляции ЭЛГОС" 
                      width={120} 
                      height={140}
                      className="object-contain"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-sm md:text-base font-semibold mb-1 overflow-hidden text-ellipsis">Аппарат глубокой осцилляции «ЭЛГОС»</h3>
                  </div>
                  
                  <button className="bg-white text-black rounded-full px-4 md:px-6 py-1 w-fit text-xs md:text-sm relative z-10">
                    Подробнее
                  </button>
                </Link>
                
                {/* Блок 2 */}
                <Link href="/services/tekar-therapy" className="bg-[#FADFFF] rounded-[20px] w-full md:w-[calc(50%-12px)] lg:w-[332px] lg:max-w-[332px] h-[175px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden flex-shrink-0">
                  <div className="hidden md:block absolute right-0 bottom-0 z-0">
                    <Image 
                      src="/images/yslugi/Tekar therapy.webp" 
                      alt="Текар-терапия" 
                      width={180} 
                      height={140}
                      className="object-contain"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-sm md:text-base font-semibold mb-1 overflow-hidden text-ellipsis">Текар-терапия</h3>
                  </div>
                  
                  <button className="bg-white text-black rounded-full px-4 md:px-6 py-1 w-fit text-xs md:text-sm relative z-10">
                    Подробнее
                  </button>
                </Link>
              </div>
              
              {/* Нижний ряд */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Блок 3 */}
                <Link href="/services/hilt-laser" className="bg-[#DBF0E9] rounded-[20px] w-full md:w-[calc(50%-12px)] lg:w-[332px] lg:max-w-[332px] h-[175px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden flex-shrink-0">
                  <div className="hidden md:block absolute right-0 bottom-0 z-0">
                    <Image 
                      src="/images/yslugi/High Intensity Laser HILT.webp" 
                      alt="Высокоинтенсивный лазер HILT" 
                      width={280} 
                      height={140}
                      className="object-contain rounded-xl"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-sm md:text-base font-semibold mb-1">
                      Высокоинтенсивный<br />лазер HILT
                    </h3>
                  </div>
                  
                  <button className="bg-white text-black rounded-full px-4 md:px-6 py-1 w-fit text-xs md:text-sm relative z-10">
                    Подробнее
                  </button>
                </Link>
                
                {/* Блок 4 */}
                <Link href="/services/sis-magnetotherapy" className="bg-[#FFF6C1] rounded-[20px] w-full md:w-[calc(50%-12px)] lg:w-[332px] lg:max-w-[332px] h-[175px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden flex-shrink-0">
                  <div className="hidden md:block absolute right-0 bottom-0 z-0">
                    <Image
                      src="/images/yslugi/High Intensity Magnetic Therapy (SIS).webp" 
                      alt="Высокоинтенсивная магнитотерапия SIS" 
                      width={185} 
                      height={140}
                      className="object-contain rounded-xl"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-sm md:text-base font-semibold mb-1 overflow-hidden text-ellipsis">
                      Высокоинтенсивная магнитотерапия (SIS)
                    </h3>
                  </div>
                  
                  <button className="bg-white text-black rounded-full px-4 md:px-6 py-1 w-fit text-xs md:text-sm relative z-10">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Второй контейнер услуг */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-items-center">
            {secondContainerData.map((service) => (
              service.id === 'urology' ? (
                <Link key={service.id} href="/services/urology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/yrolog.webp" 
                    alt="Урология" 
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'surgery' ? (
                <Link key={service.id} href="/services/surgery" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/hirurg.webp" 
                    alt="Хирургия" 
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'endocrinology' ? (
                <Link key={service.id} href="/services/endocrinology" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/endokrinjlog.webp" 
                    alt="Эндокринология" 
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <div
                  key={service.id}
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-2 md:p-4"
                >
                  <div className="flex items-center space-x-2 md:space-x-3 flex-1">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-emerald-50 group-hover:scale-110 transition-all duration-300 overflow-hidden">
                      <div className="group-hover:text-emerald-600 transition-colors duration-300 scale-75 md:scale-100">
                        {service.icon}
                      </div>
                      </div>
                      <div className="flex-1">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
} 