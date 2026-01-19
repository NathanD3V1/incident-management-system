'use client';

import React, { useState } from 'react';

export default function TeamDashboard() {
  const [tasks, setTasks] = useState([]);

  return (
    <main className="min-h-screen bg-light">
      <nav className="bg-success text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Painel da Equipe</h1>
          <button className="bg-white text-success font-bold px-4 py-2 rounded hover:bg-green-50">
            Sair
          </button>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600 font-semibold">Minhas Tarefas</h3>
            <p className="text-3xl font-bold text-success">0</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600 font-semibold">Em Progresso</h3>
            <p className="text-3xl font-bold text-warning">0</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600 font-semibold">Concluídas</h3>
            <p className="text-3xl font-bold text-primary">0</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Ocorrências Atribuídas</h2>
          
          <div className="space-y-4">
            <div className="p-4 border rounded-lg border-blue-200 bg-blue-50">
              <h3 className="font-bold text-lg mb-2">Nenhuma ocorrência atribuída</h3>
              <p className="text-gray-600">
                Aguarde novas ocorrências ou verifique seu status com a empresa
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-4">Status da Equipe</h3>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Status Atual:</span>
                <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 rounded inline-block">
                  Disponível
                </span>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Localização:</span>
                <span className="ml-2">São Paulo, SP</span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-4">Meus Dados</h3>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Nome:</span>
                <span className="ml-2">Equipe 01</span>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Empresa:</span>
                <span className="ml-2">Sua Empresa</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
