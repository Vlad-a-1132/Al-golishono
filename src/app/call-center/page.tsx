"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Appointment {
  id: string;
  name: string;
  phone: string;
  date: string;
  status: 'pending' | 'called' | 'not_called';
  message?: string;
}

export default function CallCenterPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const correctPassword = 'Ac76du31';

  useEffect(() => {
    // Проверяем пароль из localStorage
    const savedAuth = localStorage.getItem('callCenterAuth');
    if (savedAuth === correctPassword) {
      setIsAuthenticated(true);
      fetchAppointments();
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchAppointments = async () => {
    try {
      console.log('Запрос заявок с сервера...');
      const response = await fetch('/api/appointment', {
        cache: 'no-store',
      });
      const data = await response.json();
      console.log('Ответ сервера:', data);
      if (response.ok) {
        setAppointments(data.appointments || []);
        console.log('Заявок получено:', data.appointments?.length || 0);
      } else {
        console.error('Ошибка ответа:', data.error);
      }
    } catch (error) {
      console.error('Ошибка загрузки заявок:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('callCenterAuth', correctPassword);
      fetchAppointments();
    } else {
      setError('Неверный пароль');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('callCenterAuth');
    setPassword('');
  };

  const updateStatus = async (id: string, status: 'pending' | 'called' | 'not_called') => {
    try {
      const response = await fetch('/api/appointment', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status }),
      });

      if (response.ok) {
        // Обновляем локальное состояние
        setAppointments(prev => 
          prev.map(app => app.id === id ? { ...app, status } : app)
        );
      } else {
        console.error('Ошибка обновления статуса');
      }
    } catch (error) {
      console.error('Ошибка обновления статуса:', error);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'called':
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">Перезвонено</span>;
      case 'not_called':
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">Не перезвонено</span>;
      default:
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">Ожидает</span>;
    }
  };

  // Автообновление каждые 5 секунд
  useEffect(() => {
    if (!isAuthenticated) return;

    fetchAppointments();
    const interval = setInterval(fetchAppointments, 5000);

    return () => clearInterval(interval);
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Call Center - Альтамед Голицино
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Пароль
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Введите пароль"
                autoFocus
              />
            </div>
            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Call Center - Альтамед Голицино
              </h1>
              <div className="flex gap-4 text-sm text-gray-600">
                <span>
                  Всего заявок: <span className="font-semibold">{appointments.length}</span>
                </span>
                <span>
                  Ожидают: <span className="font-semibold text-yellow-600">{appointments.filter(a => a.status === 'pending').length}</span>
                </span>
                <span>
                  Перезвонено: <span className="font-semibold text-green-600">{appointments.filter(a => a.status === 'called').length}</span>
                </span>
                <span>
                  Не перезвонено: <span className="font-semibold text-red-600">{appointments.filter(a => a.status === 'not_called').length}</span>
                </span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Выйти
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
            <p className="mt-4 text-gray-600">Загрузка заявок...</p>
          </div>
        ) : appointments.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <p className="text-gray-600 text-lg">Заявок пока нет</p>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2 flex-wrap">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {appointment.name}
                      </h3>
                      {getStatusBadge(appointment.status || 'pending')}
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {appointment.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a
                        href={`tel:${appointment.phone}`}
                        className="text-lg font-medium text-teal-600 hover:text-teal-700 hover:underline"
                      >
                        {appointment.phone}
                      </a>
                    </div>
                    {appointment.message && (
                      <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-sm font-medium text-gray-700 mb-1">Сообщение:</p>
                        <p className="text-sm text-gray-600 whitespace-pre-wrap">{appointment.message}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col md:flex-row gap-2">
                    <a
                      href={`tel:${appointment.phone}`}
                      className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Позвонить
                    </a>
                    {appointment.status !== 'called' && (
                      <button
                        onClick={() => updateStatus(appointment.id, 'called')}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                      >
                        Перезвонено
                      </button>
                    )}
                    {appointment.status !== 'not_called' && (
                      <button
                        onClick={() => updateStatus(appointment.id, 'not_called')}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                      >
                        Не перезвонено
                      </button>
                    )}
                    {appointment.status !== 'pending' && (
                      <button
                        onClick={() => updateStatus(appointment.id, 'pending')}
                        className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                      >
                        Сбросить
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

