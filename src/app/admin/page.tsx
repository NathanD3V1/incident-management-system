'use client';

import React, { useState } from 'react';

export default function AdminDashboard() {
  const [incidents, setIncidents] = useState([]);

  return (
    <main className="min-h-screen bg-light">
      <nav className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Painel da Empresa</h1>
          <button className="bg-white text-primary font-bold px-4 py-2 rounded hover:bg-blue-50">
            Sair
          </button>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600 font-semibold">Ocorrências</h3>
            <p className="text-3xl font-bold text-primary">0</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600 font-semibold">Em Andamento</h3>
            <p className="text-3xl font-bold text-warning">0</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600 font-semibold">Concluídas</h3>
            <p className="text-3xl font-bold text-success">0</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600 font-semibold">Equipes</h3>
            <p className="text-3xl font-bold text-secondary">0</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Ocorrências Ativas</h2>
          <table className="w-full">
            <thead className="bg-light border-b">
              <tr>
                <th className="text-left p-3">ID</th>
                <th className="text-left p-3">Título</th>
                <th className="text-left p-3">Equipe</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Prioridade</th>
                <th className="text-left p-3">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-light">
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  Nenhuma ocorrência criada
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
