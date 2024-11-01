import React from 'react';
import { UserPlus } from 'lucide-react';
import { User } from '../types';

interface Props {
  onRegister: (user: User) => void;
}

export function RegistrationForm({ onRegister }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onRegister({
      name: formData.get('name') as string,
      sector: formData.get('sector') as User['sector'],
      status: formData.get('status') as User['status'],
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="flex items-center justify-center mb-6">
          <UserPlus className="h-12 w-12 text-emerald-600" />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Pendaftaran Mutaba'ah
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap
            </label>
            <input
              required
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Masukkan nama lengkap"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sektor
            </label>
            <select
              required
              name="sector"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="">Pilih sektor</option>
              <option value="Banjaran">Banjaran</option>
              <option value="Cangkuang">Cangkuang</option>
              <option value="Pangalengan">Pangalengan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              required
              name="status"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="">Pilih status</option>
              <option value="Karyawan">Karyawan</option>
              <option value="Pelajar">Pelajar</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition duration-200"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
}