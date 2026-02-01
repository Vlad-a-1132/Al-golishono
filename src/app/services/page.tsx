"use client";

import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export default function ServicesPage() {
  
  // Все медицинские услуги из меню
  const medicalServices = [
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
      id: 'caries-treatment',
      title: 'Лечение кариеса',
      description: 'Современное лечение кариеса и его осложнений',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5v14m6-14v14M5 9h14M5 15h14" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'implantation',
      title: 'Имплантация',
      description: 'Имплантация зубов в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'periodontics',
      title: 'Пародонтолог',
      description: 'Лечение заболеваний пародонта и десен',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9s4 4 8 4 8-4 8-4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20h6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c-1.657 0-3-1.79-3-4s1.343-4 3-4 3 1.79 3 4-1.343 4-3 4z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-consultation',
      title: 'Консультация стоматолога',
      description: 'Прием и консультация врача-стоматолога в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-hygiene',
      title: 'Гигиена полости рта',
      description: 'Профессиональная чистка зубов в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'airflow-prophylaxis-master',
      title: 'AIRFLOW Prophylaxis Master',
      description: 'Профессиональная гигиена по протоколу GBT',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'dentistry-aesthetic',
      title: 'Эстетическая стоматология',
      description: 'Отбеливание и эстетика зубов в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-deposits',
      title: 'Удаление зубных отложений',
      description: 'Снятие налета и камня в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-strengthening',
      title: 'Укрепление тканей зуба',
      description: 'Фторирование и защита эмали в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-surgery',
      title: 'Стоматолог-хирург',
      description: 'Удаление зубов, имплантация, челюстно-лицевая хирургия',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-extraction',
      title: 'Удаление зубов',
      description: 'Простое и сложное удаление зубов в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-emergency',
      title: 'Экстренная хирургия',
      description: 'Экстренная и гнойная хирургия в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-plastic',
      title: 'Пластическая хирургия',
      description: 'Пластика мягких тканей в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-prosthodontist',
      title: 'Стоматолог-ортопед',
      description: 'Протезирование зубов, коронки, виниры в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-prosthetics',
      title: 'Протезирование зубов',
      description: 'Протезирование на имплантатах, коронки, протезы в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-cadcam',
      title: 'CAD/CAM-технологии',
      description: 'Керамические вкладки, виниры, коронки CAD/CAM в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-constructions',
      title: 'Стоматологические конструкции',
      description: 'Изготовление и ремонт протезов, коронок в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-orthodontist',
      title: 'Стоматолог-ортодонт',
      description: 'Исправление прикуса, брекеты, элайнеры в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-braces',
      title: 'Брекет-системы',
      description: 'Металлические, керамические, сапфировые брекеты в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-removable-appliances',
      title: 'Съемные аппараты',
      description: 'Элайнеры, каппы для исправления прикуса в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-fixed-appliances',
      title: 'Несъемные аппараты',
      description: 'Ретейнеры, аппарат Forsus в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-orthodontic-maintenance',
      title: 'Обслуживание ортодонтических аппаратов',
      description: 'Ремонт брекетов, замена дуг, лигатур в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: true
    },
    {
      id: 'dentistry-pediatric',
      title: 'Детский стоматолог',
      description: 'Лечение зубов у детей в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
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
      title: 'Терапевт',
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
      id: 'urolog-golitsino',
      title: 'Уролог',
      description: 'Приём уролога и детского уролога-андролога в Голицино',
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
    {
      id: 'gonkongskiy-gripp',
      title: 'Гонконгский грипп',
      description: 'Диагностика и лечение гонконгского гриппа H3N2',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'psihiatr-golitsino',
      title: 'Психиатр',
      description: 'Приём психиатра и психолога в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    {
      id: 'onkolog-golitsino',
      title: 'Онколог',
      description: 'Приём врача-онколога и детского онколога в Голицино',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      category: 'treatment',
      hasSubmenu: false
    },
    // Диагностические услуги
    // Дополнительные услуги
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
    },
    {
      id: 'manual-therapy',
      title: 'Мануальная терапия',
      description: 'Лечение опорно-двигательного аппарата',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: true
    },
    {
      id: 'functional-diagnostics',
      title: 'Функциональная диагностика',
      description: 'Оценка функционального состояния органов и систем',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: false
    },
    {
      id: 'general-manipulations',
      title: 'Манипуляции общего назначения',
      description: 'Лечебные блокады, инфузионная терапия, диагностика',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      category: 'additional',
      hasSubmenu: false
    }
  ];

  // Первый контейнер - основные услуги
  const firstContainerServices = [
    'gastroenterology', 'gynecology', 'dermatology',
    'cardiology', 'mammology', 'neurology',
    'otolaryngology', 'ophthalmology', 'pediatrics',
    'proctology', 'surdology', 'therapy', 'traumatology',
    'urolog-golitsino', 'surgery', 'endocrinology', 'gonkongskiy-gripp', 'psihiatr-golitsino', 'onkolog-golitsino'
  ];

  // Реабилитация - отдельная категория
  const rehabilitationServices = [
    'carboxytherapy', 'osteopathy', 'shockwave-therapy', 'manual-therapy', 'functional-diagnostics', 'general-manipulations'
  ];

  // Диагностические услуги (соответствуют странице /diagnostics)
  const diagnosticsServices = [
    { id: 'ultrasound', title: 'Ультразвуковое обследование (УЗИ)', description: 'Информативный и безопасный метод инструментальной диагностики органов и систем', image: '/images/documents/ultrazvukovoe-obsledovanie-uzi_3.jpg', link: '/services/ultrasound' },
    { id: 'uzi-serdca', title: 'УЗИ сердца', description: 'Эхокардиография для оценки структуры и функции сердца', image: '/images/yslugi/Hardware diagnostics.webp', link: '/services/uzi-serdca' },
    { id: 'lab-tests', title: 'Лабораторные исследования', description: 'Полный спектр лабораторных анализов для комплексной диагностики', image: '/images/yslugi/Laboratory tests.webp', link: '/services/lab-tests' },
    { id: 'ekg', title: 'Снятие электрокардиограммы (ЭКГ)', description: 'Регистрация электрической активности сердца для диагностики', image: '/images/services/Screenshot_1832.png', link: '/services/ekg' },
    { id: 'sutochnoe-monitorirovanie-ad', title: 'Суточное мониторирование артериального давления', description: 'Непрерывная регистрация АД в течение 24 часов в условиях обычной активности', image: '/images/services/Screenshot_1832.png', link: '/services/sutochnoe-monitorirovanie-ad' },
    { id: 'holter', title: 'Холтерское мониторирование электрокардиограммы', description: 'Суточная запись ЭКГ для выявления нарушений ритма и ишемии', image: '/images/services/Screenshot_1832.png', link: '/services/holter' }
  ];

  // Стоматология - отдельная категория
  const dentistryServices = ['implantation', 'caries-treatment', 'dentistry-consultation', 'dentistry-pediatric', 'dentistry-surgery', 'dentistry-prosthodontist', 'dentistry-orthodontist', 'periodontics', 'dentistry-hygiene', 'airflow-prophylaxis-master', 'dentistry-extraction', 'dentistry-emergency', 'dentistry-plastic', 'dentistry-aesthetic', 'dentistry-prosthetics', 'dentistry-cadcam', 'dentistry-constructions', 'dentistry-deposits', 'dentistry-braces', 'dentistry-removable-appliances', 'dentistry-fixed-appliances', 'dentistry-orthodontic-maintenance', 'dentistry-strengthening'];

  // Первый контейнер услуг
  const firstContainerData = medicalServices.filter(service => 
    firstContainerServices.includes(service.id)
  );

  // Реабилитация
  const rehabilitationData = medicalServices.filter(service => 
    rehabilitationServices.includes(service.id)
  );

  // Стоматология
  const dentistryData = dentistryServices.map(id => 
    medicalServices.find(service => service.id === id)
  ).filter((service): service is typeof medicalServices[0] => service !== undefined);

  // Второй контейнер - остальные услуги
  const secondContainerData = medicalServices.filter(service => 
    !firstContainerServices.includes(service.id) &&
    !rehabilitationServices.includes(service.id) &&
    !dentistryServices.includes(service.id) &&
    service.id !== 'dentistry'
  );

  return (
    <div className="flex flex-col min-h-full bg-white overflow-x-hidden">
      {/* Первый контейнер услуг */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-items-center">
            {firstContainerData.map((service) => (
              service.id === 'gastroenterology' ? (
                <Link key={service.id} href="/services/gastroenterolog-golitsino" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
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
                <Link key={service.id} href="/services/ginekolog-golitsino" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
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
                <Link key={service.id} href="/services/dermatolog-golitsino" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
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
                ) : service.id === 'implantation' ? (
                <Link key={service.id} href="/services/implantation" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/implant.webp" 
                      alt="Имплантация" 
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
                <Link key={service.id} href="/services/nevrolog-golitsino" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
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
                <Link key={service.id} href="/services/otorinolaringolog-golitsino" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
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
                <Link key={service.id} href="/services/oftalmolog-golitsino" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
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
                <Link key={service.id} href="/services/pediatr-golitsino" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
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
                <Link key={service.id} href="/services/terapevt-golitsino" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/terapiay 1.webp" 
                      alt="Терапевт" 
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
                ) : service.id === 'urolog-golitsino' ? (
                <Link key={service.id} href="/services/urolog-golitsino" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/yrolog.webp" 
                      alt="Уролог" 
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
                ) : service.id === 'gonkongskiy-gripp' ? (
                <Link key={service.id} href="/services/gonkongskiy-gripp" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/h3n2.webp" 
                      alt="Гонконгский грипп" 
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
                ) : service.id === 'psihiatr-golitsino' ? (
                <Link key={service.id} href="/services/psihiatr-golitsino" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/terapiay 1.webp" 
                      alt="Психиатр" 
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
                ) : service.id === 'onkolog-golitsino' ? (
                <Link key={service.id} href="/services/onkolog-golitsino" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                    <img 
                      src="/images/yslugi/mammalogy.webp" 
                      alt="Онколог" 
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
            {/* Имплантация зубов */}
            <Link href="/promo/promo-3" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-[300px] md:h-[377.22px] flex flex-col">
              <div className="h-[200px] md:h-[259.22px] relative flex-shrink-0">
                <img 
                  src="/images/yslugi/implant.webp" 
                  alt="Имплантация зубов" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[100px] md:h-[118px] bg-emerald-500 flex flex-col flex-shrink-0 px-4 md:px-6 py-3">
                <div className="flex-1 min-h-0 flex flex-col justify-center">
                  <h3 className="text-white font-semibold text-sm md:text-lg leading-tight">Имплантация зубов</h3>
                  <p className="text-white/95 text-xs md:text-sm mt-0.5 leading-tight">Скидка 30% — цена: 41160 ₽ (было 58800 ₽)</p>
                </div>
                <div className="flex-shrink-0 h-8 flex items-center justify-end hidden md:flex">
                  <span className="hidden bg-white text-emerald-600 rounded-full px-4 py-1.5 text-xs font-medium mr-2">Подробнее</span>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <svg className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Скидки для пенсионеров */}
            <Link href="/promo/promo-7" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-[300px] md:h-[377.22px] flex flex-col">
              <div className="h-[200px] md:h-[259.22px] relative flex-shrink-0">
                <img 
                  src="/images/slides/2-pensia.webp" 
                  alt="Скидки для пенсионеров" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[100px] md:h-[118px] bg-[#c49a68] flex flex-col flex-shrink-0 px-4 md:px-6 py-3">
                <div className="flex-1 min-h-0 flex flex-col justify-center">
                  <h3 className="text-white font-semibold text-sm md:text-lg leading-tight">Скидки для пенсионеров</h3>
                  <p className="text-white/95 text-xs md:text-sm mt-0.5 leading-tight">10% на приём врача, УЗИ, анализы</p>
                </div>
                <div className="flex-shrink-0 h-8 flex items-center justify-end hidden md:flex">
                  <span className="hidden bg-white text-[#c49a68] rounded-full px-4 py-1.5 text-xs font-medium mr-2">Подробнее</span>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <svg className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Профессиональная гигиена полости рта */}
            <Link href="/promo/promo-1" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-[300px] md:h-[377.22px] flex flex-col">
              <div className="h-[200px] md:h-[259.22px] relative flex-shrink-0">
                <img 
                  src="/images/dentisrty/ff0799f0-79d9-49cb-b32a-bac2ce8b6d2e 1.webp" 
                  alt="Профессиональная гигиена полости рта" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[100px] md:h-[118px] bg-[#69a0bd] flex flex-col flex-shrink-0 px-4 md:px-6 py-3">
                <div className="flex-1 min-h-0 flex flex-col justify-center">
                  <h3 className="text-white font-semibold text-sm md:text-lg leading-tight">Профессиональная гигиена полости рта</h3>
                  <p className="text-white/95 text-xs md:text-sm mt-0.5 leading-tight">Цена: 4600 ₽ (было 6600 ₽)</p>
                </div>
                <div className="flex-shrink-0 h-8 flex items-center justify-end hidden md:flex">
                  <span className="hidden bg-white text-[#69a0bd] rounded-full px-4 py-1.5 text-xs font-medium mr-2">Подробнее</span>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <svg className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Скидки на анализы (1-15 февраля) */}
            <Link href="/promo/promo-4" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-[300px] md:h-[377.22px] flex flex-col">
              <div className="h-[200px] md:h-[259.22px] relative flex-shrink-0">
                <img 
                  src="/images/slides/3-analizy.webp" 
                  alt="Скидки на анализы" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[100px] md:h-[118px] bg-orange-500 flex flex-col flex-shrink-0 px-4 md:px-6 py-3">
                <div className="flex-1 min-h-0 flex flex-col justify-center">
                  <h3 className="text-white font-semibold text-sm md:text-lg leading-tight">Скидки на анализы (1-15 февраля)</h3>
                  <p className="text-white/95 text-xs md:text-sm mt-0.5 leading-tight">Пн-Сб 15%, Вс 25%</p>
                </div>
                <div className="flex-shrink-0 h-8 flex items-center justify-end hidden md:flex">
                  <span className="hidden bg-white text-orange-500 rounded-full px-4 py-1.5 text-xs font-medium mr-2">Подробнее</span>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <svg className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Диагностические услуги (соответствуют странице /diagnostics) */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Диагностические услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {diagnosticsServices.map((service) => (
              <Link key={service.id} href={service.link} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-4 md:p-6">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/yslugi/Hardware diagnostics.webp';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Стоматология */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Стоматология
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-items-center">
            {dentistryData.map((service) => (
              service.id === 'dentistry-consultation' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/consultation"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/dc792999-799a-442d-b88d-d1e7eadaae11 1.webp"
                    alt="Консультация стоматолога"
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
              ) : service.id === 'caries-treatment' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/caries"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb5855rne17bddh7ks55a0ze_1764334299_img_1.webp"
                    alt="Лечение кариеса"
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
              ) : service.id === 'implantation' ? (
                <Link
                  key={service.id}
                  href="/services/implantation"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/yslugi/implant.webp"
                    alt="Имплантация"
                    className="w-10 md:w-20 h-full object-cover rounded-l-[20px]"
                  />
                  <div className="flex-1 px-2 md:px-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400	group-hover:text-white group-hover:bg-emerald-500 rounded-full p-1 transition-all duration-300 flex-shrink-0 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : service.id === 'periodontics' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/periodontics"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/image (1) 2.webp"
                    alt="Пародонтология"
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
              ) : service.id === 'airflow-prophylaxis-master' ? (
                <Link
                  key={service.id}
                  href="/services/airflow-prophylaxis-master"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden relative"
                >
                  <span className="absolute top-2 right-2 md:top-3 md:right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full shadow-md z-10 animate-pulse">
                    NEW
                  </span>
                  <img
                    src="/images/yslugi/air flow.webp"
                    alt="AIRFLOW Prophylaxis Master"
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
              ) : service.id === 'dentistry-hygiene' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/hygiene"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/ff0799f0-79d9-49cb-b32a-bac2ce8b6d2e 1.webp"
                    alt="Гигиена полости рта"
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
              ) : service.id === 'dentistry-aesthetic' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/aesthetic"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/stad.webp"
                    alt="Эстетическая стоматология"
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
              ) : service.id === 'dentistry-deposits' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/deposits"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb5h4ze2ek2vjpgzt0wnmcvh_1764343713_img_0.webp"
                    alt="Удаление зубных отложений"
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
              ) : service.id === 'dentistry-strengthening' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/strengthening"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/ftorirovanie2.jpg"
                    alt="Укрепление тканей зуба"
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
              ) : service.id === 'dentistry-surgery' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/surgery"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/stom surgeon.webp"
                    alt="Стоматолог-хирург"
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
              ) : service.id === 'dentistry-extraction' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/extraction"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/zeb.webp"
                    alt="Удаление зубов"
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
              ) : service.id === 'dentistry-emergency' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/emergency"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/fdfs.webp"
                    alt="Экстренная хирургия"
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
              ) : service.id === 'dentistry-plastic' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/plastic"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/fdfs.webp"
                    alt="Пластическая хирургия"
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
              ) : service.id === 'dentistry-prosthodontist' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/prosthodontics"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb59j9wbe6ma7c4wg6n4yecp_1764335787_img_0.webp"
                    alt="Стоматолог-ортопед"
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
              ) : service.id === 'dentistry-prosthetics' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/prosthetics"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb5fptcdfe9vny2vy0fadwrt_1764342213_img_0.webp"
                    alt="Протезирование зубов"
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
              ) : service.id === 'dentistry-cadcam' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/cadcam"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/cad.webp"
                    alt="CAD/CAM-технологии"
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
              ) : service.id === 'dentistry-constructions' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/constructions"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb5fptcdfe9vny2vy0fadwrt_1764342213_img_0.webp"
                    alt="Стоматологические конструкции"
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
              ) : service.id === 'dentistry-orthodontist' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/orthodontics"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb59xabnenht3qwt33mm5r8v_1764336113_img_0.webp"
                    alt="Стоматолог-ортодонт"
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
              ) : service.id === 'dentistry-braces' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/braces"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb59xabnenht3qwt33mm5r8v_1764336113_img_0.webp"
                    alt="Брекет-системы"
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
              ) : service.id === 'dentistry-removable-appliances' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/removable-appliances"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb5hmq28fn0stdqj9ta6kefj_1764344227_img_0.webp"
                    alt="Съемные аппараты"
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
              ) : service.id === 'dentistry-fixed-appliances' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/fixed-appliances"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb5hy6cmevwbv12bpx0npyvx_1764344538_img_1.webp"
                    alt="Несъемные аппараты"
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
              ) : service.id === 'dentistry-orthodontic-maintenance' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/orthodontic-maintenance"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb5fptcdfe9vny2vy0fadwrt_1764342213_img_0.webp"
                    alt="Обслуживание ортодонтических аппаратов"
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
              ) : service.id === 'dentistry-pediatric' ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/pediatric-dentistry"
                  className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden"
                >
                  <img
                    src="/images/dentisrty/task_01kb590e4demkax3am17hree6h_1764335184_img_0.webp"
                    alt="Детский стоматолог"
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
              ) : null
            ))}
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
              ) : service.id === 'manual-therapy' ? (
                <Link key={service.id} href="/services/manual-therapy" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/massaj.webp" 
                    alt="Мануальная терапия" 
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
              ) : service.id === 'functional-diagnostics' ? (
                <Link key={service.id} href="/services/functional-diagnostics" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/Hardware diagnostics.webp" 
                    alt="Функциональная диагностика" 
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
              ) : service.id === 'general-manipulations' ? (
                <Link key={service.id} href="/services/general-manipulations" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/fizio.webp" 
                    alt="Манипуляции общего назначения" 
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

      {/* Второй контейнер услуг */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-items-center">
            {secondContainerData.map((service) => (
              service.id === 'urolog-golitsino' ? (
                <Link key={service.id} href="/services/urolog-golitsino" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/yrolog.webp" 
                    alt="Уролог" 
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
              ) : service.id === 'gonkongskiy-gripp' ? (
                <Link key={service.id} href="/services/gonkongskiy-gripp" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/h3n2.webp" 
                    alt="Гонконгский грипп" 
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
              ) : service.id === 'psihiatr-golitsino' ? (
                <Link key={service.id} href="/services/psihiatr-golitsino" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/terapiay 1.webp" 
                    alt="Психиатр" 
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
              ) : service.id === 'onkolog-golitsino' ? (
                <Link key={service.id} href="/services/onkolog-golitsino" className="bg-[#F6F8F7] rounded-[20px] hover:shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer group flex items-center justify-between h-[80px] md:h-[100px] w-full max-w-[296.5px] p-0 overflow-hidden">
                  <img 
                    src="/images/yslugi/mammalogy.webp" 
                    alt="Онколог" 
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