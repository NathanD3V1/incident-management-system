'use client';

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Sistema de Gestão de Ocorrências
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Controle e coordenação de equipes em tempo real
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <a
              href="/admin"
              className="bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition"
            >
              📊 Painel da Empresa
            </a>
            <a
              href="/team"
              className="bg-success text-white font-bold py-4 px-8 rounded-lg hover:bg-green-700 transition"
            >
              👥 Painel da Equipe
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-2">📍 Rastreamento</h3>
              <p>Acompanhe cada ocorrência desde a saída até a conclusão</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-2">💬 Chat</h3>
              <p>Comunique-se em tempo real entre empresa e equipes</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-2">👨‍💼 Equipes</h3>
              <p>Gerencie disponibilidade e alocação de recursos</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
