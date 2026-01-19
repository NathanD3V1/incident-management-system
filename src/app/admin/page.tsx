'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Dados simulados
const mockIncidents = [
  { id: '1', title: 'Reparo elétrico - Avenida Paulista', status: 'IN_TRANSIT', priority: 'HIGH', team: 'Equipe A', createdAt: new Date(Date.now() - 30 * 60000) },
  { id: '2', title: 'Vazamento de água - Rua XV', status: 'ON_SITE', priority: 'CRITICAL', team: 'Equipe B', createdAt: new Date(Date.now() - 60 * 60000) },
  { id: '3', title: 'Manutenção preventiva - Shopping', status: 'PENDING', priority: 'LOW', team: 'Equipe C', createdAt: new Date(Date.now() - 120 * 60000) },
  { id: '4', title: 'Reparo hidráulico - Condomínio', status: 'COMPLETED', priority: 'NORMAL', team: 'Equipe A', createdAt: new Date(Date.now() - 180 * 60000) },
  { id: '5', title: 'Inspeção técnica - Prédio comercial', status: 'PENDING', priority: 'NORMAL', team: 'Equipe B', createdAt: new Date(Date.now() - 240 * 60000) },
];

const mockTeams = [
  { id: '1', name: 'Equipe A', members: 4, status: 'AVAILABLE', location: 'Zona Sul' },
  { id: '2', name: 'Equipe B', members: 3, status: 'BUSY', location: 'Zona Norte' },
  { id: '3', name: 'Equipe C', members: 5, status: 'AVAILABLE', location: 'Centro' },
];

const statusConfig = {
  PENDING: { label: 'Aguardando', color: 'bg-yellow-100', textColor: 'text-yellow-800' },
  IN_TRANSIT: { label: 'Em Trânsito', color: 'bg-blue-100', textColor: 'text-blue-800' },
  ON_SITE: { label: 'No Local', color: 'bg-orange-100', textColor: 'text-orange-800' },
  COMPLETED: { label: 'Concluído', color: 'bg-green-100', textColor: 'text-green-800' },
};

const priorityConfig = {
  LOW: { label: 'Baixa', color: 'bg-gray-100', textColor: 'text-gray-800' },
  NORMAL: { label: 'Normal', color: 'bg-blue-100', textColor: 'text-blue-800' },
  HIGH: { label: 'Alta', color: 'bg-orange-100', textColor: 'text-orange-800' },
  CRITICAL: { label: 'Crítica', color: 'bg-red-100', textColor: 'text-red-800' },
};

export default function AdminDashboard() {
  const [selectedIncident, setSelectedIncident] = useState(mockIncidents[0]);
  const [filterStatus, setFilterStatus] = useState('ALL');

  const filteredIncidents = filterStatus === 'ALL' 
    ? mockIncidents 
    : mockIncidents.filter(i => i.status === filterStatus);

  const getStatusColor = (status: string) => {
    return statusConfig[status as keyof typeof statusConfig] || { color: 'bg-gray-100', textColor: 'text-gray-800' };
  };

  const getPriorityColor = (priority: string) => {
    return priorityConfig[priority as keyof typeof priorityConfig] || { color: 'bg-gray-100', textColor: 'text-gray-800' };
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-950 border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">📊</span>
            </div>
            <span className="text-white font-bold">Painel Admin</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-600 rounded-lg p-6 text-white">
            <div className="text-3xl font-bold">{mockIncidents.length}</div>
            <p className="text-blue-100">Total de Ocorrências</p>
          </div>
          <div className="bg-orange-600 rounded-lg p-6 text-white">
            <div className="text-3xl font-bold">{mockIncidents.filter(i => i.status === 'PENDING').length}</div>
            <p className="text-orange-100">Aguardando</p>
          </div>
          <div className="bg-green-600 rounded-lg p-6 text-white">
            <div className="text-3xl font-bold">{mockTeams.filter(t => t.status === 'AVAILABLE').length}</div>
            <p className="text-green-100">Equipes Disponíveis</p>
          </div>
          <div className="bg-cyan-600 rounded-lg p-6 text-white">
            <div className="text-3xl font-bold">{mockTeams.length}</div>
            <p className="text-cyan-100">Total de Equipes</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Incidents List */}
          <div className="col-span-2">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Ocorrências</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                  + Nova Ocorrência
                </button>
              </div>

              {/* Filter */}
              <div className="flex gap-2 mb-4">
                {['ALL', 'PENDING', 'IN_TRANSIT', 'ON_SITE', 'COMPLETED'].map(status => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`px-3 py-1 rounded-lg transition ${
                      filterStatus === status
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {status === 'ALL' ? 'Todas' : status}
                  </button>
                ))}
              </div>

              {/* Incidents List */}
              <div className="space-y-3">
                {filteredIncidents.map((incident) => (
                  <div
                    key={incident.id}
                    onClick={() => setSelectedIncident(incident)}
                    className={`p-4 rounded-lg border cursor-pointer transition ${
                      selectedIncident.id === incident.id
                        ? 'bg-blue-600 border-blue-500'
                        : 'bg-slate-700 border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-white mb-2">{incident.title}</h3>
                        <div className="flex gap-2">
                          <span className={`px-2 py-1 rounded text-sm font-semibold ${getStatusColor(incident.status).color} ${getStatusColor(incident.status).textColor}`}>
                            {getStatusColor(incident.status).label}
                          </span>
                          <span className={`px-2 py-1 rounded text-sm font-semibold ${getPriorityColor(incident.priority).color} ${getPriorityColor(incident.priority).textColor}`}>
                            {getPriorityColor(incident.priority).label}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-300">{incident.team}</p>
                        <p className="text-xs text-slate-400">
                          {Math.floor((Date.now() - incident.createdAt.getTime()) / 60000)} min atrás
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Detalhes da Ocorrência</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-slate-400 text-sm">Título</label>
                  <p className="text-white font-semibold">{selectedIncident.title}</p>
                </div>

                <div>
                  <label className="text-slate-400 text-sm">Status</label>
                  <p className={`px-3 py-1 rounded-full text-sm font-semibold inline-block ${getStatusColor(selectedIncident.status).color} ${getStatusColor(selectedIncident.status).textColor}`}>
                    {getStatusColor(selectedIncident.status).label}
                  </p>
                </div>

                <div>
                  <label className="text-slate-400 text-sm">Prioridade</label>
                  <p className={`px-3 py-1 rounded-full text-sm font-semibold inline-block ${getPriorityColor(selectedIncident.priority).color} ${getPriorityColor(selectedIncident.priority).textColor}`}>
                    {getPriorityColor(selectedIncident.priority).label}
                  </p>
                </div>

                <div>
                  <label className="text-slate-400 text-sm">Equipe Atribuída</label>
                  <p className="text-white font-semibold">{selectedIncident.team}</p>
                </div>

                <div>
                  <label className="text-slate-400 text-sm">Data de Criação</label>
                  <p className="text-white font-semibold">{selectedIncident.createdAt.toLocaleString('pt-BR')}</p>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                  ✏️ Editar
                </button>
                <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg transition">
                  📍 Ver Localização
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Teams Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Equipes em Operação</h2>
          <div className="grid grid-cols-3 gap-4">
            {mockTeams.map(team => (
              <div key={team.id} className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white">{team.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${team.status === 'AVAILABLE' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                    {team.status === 'AVAILABLE' ? 'Disponível' : 'Ocupada'}
                  </span>
                </div>
                <p className="text-slate-300 mb-2">👥 {team.members} membros</p>
                <p className="text-slate-300 mb-4">📍 {team.location}</p>
                <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg transition text-sm">
                  Ver Detalhes
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
