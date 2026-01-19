'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Dados simulados
const mockAssignments = [
  { id: '1', title: 'Reparo elétrico - Avenida Paulista', status: 'IN_TRANSIT', priority: 'HIGH', createdAt: new Date(Date.now() - 30 * 60000), address: 'Avenida Paulista, 1000' },
  { id: '2', title: 'Vazamento de água - Rua XV', status: 'PENDING', priority: 'CRITICAL', createdAt: new Date(Date.now() - 120 * 60000), address: 'Rua XV de Novembro, 500' },
];

const mockChatMessages = [
  { id: '1', sender: 'Empresa', message: 'Nova ocorrência atribuída a vocês!', time: new Date(Date.now() - 5 * 60000) },
  { id: '2', sender: 'Você', message: 'Recebido! Estamos a caminho.', time: new Date(Date.now() - 3 * 60000) },
  { id: '3', sender: 'Empresa', message: 'Ok, atualizem o status quando chegarem.', time: new Date(Date.now() - 1 * 60000) },
];

const statusConfig = {
  PENDING: { label: 'Aguardando', color: 'bg-yellow-100', textColor: 'text-yellow-800', icon: '⏳' },
  IN_TRANSIT: { label: 'Em Trânsito', color: 'bg-blue-100', textColor: 'text-blue-800', icon: '🚗' },
  ON_SITE: { label: 'No Local', color: 'bg-orange-100', textColor: 'text-orange-800', icon: '📍' },
};

const priorityConfig = {
  LOW: { label: 'Baixa', color: 'bg-gray-100', textColor: 'text-gray-800' },
  NORMAL: { label: 'Normal', color: 'bg-blue-100', textColor: 'text-blue-800' },
  HIGH: { label: 'Alta', color: 'bg-orange-100', textColor: 'text-orange-800' },
  CRITICAL: { label: 'Crítica', color: 'bg-red-100', textColor: 'text-red-800' },
};

export default function TeamDashboard() {
  const [selectedAssignment, setSelectedAssignment] = useState(mockAssignments[0]);
  const [teamStatus, setTeamStatus] = useState('AVAILABLE');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(mockChatMessages);

  const getStatusColor = (status: string) => {
    return statusConfig[status as keyof typeof statusConfig] || { label: 'Desconhecido', color: 'bg-gray-100', textColor: 'text-gray-800', icon: '❓' };
  };

  const getPriorityColor = (priority: string) => {
    return priorityConfig[priority as keyof typeof priorityConfig] || { color: 'bg-gray-100', textColor: 'text-gray-800' };
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: String(messages.length + 1),
        sender: 'Você',
        message: message,
        time: new Date()
      }]);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-950 border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">👥</span>
            </div>
            <span className="text-white font-bold">Painel da Equipe</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-green-600 rounded-lg p-6 text-white">
            <div className="text-3xl font-bold">{mockAssignments.length}</div>
            <p className="text-green-100">Ocorrências Atribuídas</p>
          </div>
          <div className="bg-blue-600 rounded-lg p-6 text-white">
            <div className="text-3xl font-bold">{mockAssignments.filter(a => a.status === 'PENDING').length}</div>
            <p className="text-blue-100">Aguardando Partida</p>
          </div>
          <div className="bg-orange-600 rounded-lg p-6 text-white">
            <div className="text-3xl font-bold">{mockAssignments.filter(a => a.status === 'IN_TRANSIT' || a.status === 'ON_SITE').length}</div>
            <p className="text-orange-100">Em Andamento</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Main Column - Assignments */}
          <div className="col-span-2 space-y-8">
            {/* Assignments List */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">🎯 Suas Atribuições</h2>
              
              <div className="space-y-3">
                {mockAssignments.map((assignment) => {
                  const status = getStatusColor(assignment.status);
                  return (
                    <div
                      key={assignment.id}
                      onClick={() => setSelectedAssignment(assignment)}
                      className={`p-4 rounded-lg border cursor-pointer transition ${
                        selectedAssignment.id === assignment.id
                          ? 'bg-green-600 border-green-500'
                          : 'bg-slate-700 border-slate-600 hover:border-slate-500'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-2">{assignment.title}</h3>
                          <div className="flex gap-2 mb-2">
                            <span className={`px-2 py-1 rounded text-sm font-semibold ${status.color} ${status.textColor}`}>
                              {status.icon} {status.label}
                            </span>
                            <span className={`px-2 py-1 rounded text-sm font-semibold ${getPriorityColor(assignment.priority).color} ${getPriorityColor(assignment.priority).textColor}`}>
                              {getPriorityColor(assignment.priority).label}
                            </span>
                          </div>
                          <p className="text-slate-300 text-sm">📍 {assignment.address}</p>
                        </div>
                        <p className="text-xs text-slate-400">
                          {Math.floor((Date.now() - assignment.createdAt.getTime()) / 60000)} min atrás
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Assignment Details */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">📋 Detalhes da Atribuição</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-sm">Título</label>
                    <p className="text-white font-semibold">{selectedAssignment.title}</p>
                  </div>
                  <div>
                    <label className="text-slate-400 text-sm">Status</label>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(selectedAssignment.status).color} ${getStatusColor(selectedAssignment.status).textColor}`}>
                        {getStatusColor(selectedAssignment.status).label}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 text-sm">Endereço</label>
                  <p className="text-white font-semibold">{selectedAssignment.address}</p>
                </div>

                <div>
                  <label className="text-slate-400 text-sm">Prioridade</label>
                  <p className={`px-3 py-1 rounded-full text-sm font-semibold inline-block ${getPriorityColor(selectedAssignment.priority).color} ${getPriorityColor(selectedAssignment.priority).textColor}`}>
                    {getPriorityColor(selectedAssignment.priority).label}
                  </p>
                </div>

                <div className="pt-4 space-y-2">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition font-semibold">
                    ✓ Confirmar Chegada
                  </button>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                    📍 Ver Mapa
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Team Status & Chat */}
          <div className="space-y-6">
            {/* Team Status */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">👥 Status da Equipe</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-slate-400 text-sm">Status Atual</label>
                  <select 
                    value={teamStatus}
                    onChange={(e) => setTeamStatus(e.target.value)}
                    className="w-full bg-slate-700 text-white border border-slate-600 rounded px-3 py-2"
                  >
                    <option value="AVAILABLE">🟢 Disponível</option>
                    <option value="ON_CALL">🟡 De Prontidão</option>
                    <option value="IN_TRANSIT">🔵 Em Trânsito</option>
                    <option value="ON_SITE">🟠 No Local</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-400 text-sm">Membros</label>
                  <p className="text-white font-semibold">4 pessoas</p>
                </div>

                <div>
                  <label className="text-slate-400 text-sm">Localização</label>
                  <p className="text-white font-semibold">Zona Sul</p>
                </div>
              </div>
            </div>

            {/* Chat */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex flex-col h-96">
              <h3 className="text-lg font-bold text-white mb-3">💬 Chat com Empresa</h3>
              
              <div className="flex-1 overflow-y-auto mb-3 space-y-3 pb-2">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'Você' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs px-3 py-2 rounded-lg ${msg.sender === 'Você' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'}`}>
                      <p className="text-xs font-semibold opacity-70 mb-1">{msg.sender}</p>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Digitar mensagem..."
                  className="flex-1 bg-slate-700 text-white border border-slate-600 rounded px-3 py-2 text-sm"
                />
                <button 
                  onClick={handleSendMessage}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded transition"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
