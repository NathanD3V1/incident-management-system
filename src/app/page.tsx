'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header/Navigation */}
      <header className="bg-slate-950 border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">📊</span>
            </div>
            <h1 className="text-xl font-bold text-white">Gestão de Ocorrências</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-white mb-4">
            Sistema Inteligente de <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Gestão de Ocorrências
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Controle total de equipes, rastreamento em tempo real e comunicação integrada. Tudo em um só lugar.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-2xl mx-auto">
          <Link href="/admin" className="group">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-xl hover:from-blue-500 hover:to-blue-600 transition transform hover:scale-105 cursor-pointer">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-2xl font-bold text-white mb-2">Painel da Empresa</h3>
              <p className="text-blue-100">Gerenciamento de ocorrências e equipes</p>
            </div>
          </Link>
          <Link href="/team" className="group">
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-xl hover:from-green-500 hover:to-emerald-600 transition transform hover:scale-105 cursor-pointer">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="text-2xl font-bold text-white mb-2">Painel da Equipe</h3>
              <p className="text-green-100">Acompanhe suas atribuições e status</p>
            </div>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-blue-500 transition">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-white mb-2">Rastreamento em Tempo Real</h3>
            <p className="text-slate-400">Monitore cada ocorrência desde o início até a conclusão com precisão</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-cyan-500 transition">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-white mb-2">Chat Integrado</h3>
            <p className="text-slate-400">Comunique-se instantaneamente entre empresa e equipes</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-green-500 transition">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-white mb-2">Gestão de Equipes</h3>
            <p className="text-slate-400">Aloque recursos e gerencie disponibilidade de forma eficiente</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-700">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <p className="text-slate-300">Uptime</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">&lt;2s</div>
              <p className="text-slate-300">Tempo Real</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <p className="text-slate-300">Disponível</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-700 mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>© 2026 Sistema de Gestão de Ocorrências. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
