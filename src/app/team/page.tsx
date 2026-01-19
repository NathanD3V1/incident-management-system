'use client';

import { useEffect, useState } from 'react';
import { EQUIPES, OCORRENCIAS } from '@/lib/datos';
import { useRouter } from 'next/navigation';
import { ChatPanel } from '@/components/ChatPanel';

export default function TeamPanel() {
  const router = useRouter();
  const [usuario, setUsuario] = useState<any>(null);
  const [equipe, setEquipe] = useState<any>(null);
  const [ocorrencia, setOcorrencia] = useState<any>(null);

  const [horarios, setHorarios] = useState({
    saida: null as string | null,
    chegada: null as string | null,
    inicio: null as string | null,
    fim: null as string | null
  });

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('usuarioLogado');
    if (!dadosSalvos) {
      router.push('/');
      return;
    }
    const user = JSON.parse(dadosSalvos);
    setUsuario(user);

    if (user.cargo === 'ADMIN') {
      router.push('/admin');
      return;
    }

    const dadosEquipe = EQUIPES.find((e: { id: string }) => e.id === user.equipeId);
    setEquipe(dadosEquipe);

    const dadosOcorrencia = OCORRENCIAS.find((o: { equipeId: string }) => o.equipeId === user.equipeId);
    setOcorrencia(dadosOcorrencia);
  }, [router]);

  if (!usuario || !equipe) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-gray-400">Carregando dados da matrícula...</p>
      </div>
    );
  }

  const handleStatusChange = (novoStatus: string) => {
    const agora = new Date().toLocaleTimeString();
    setOcorrencia((o: any) => (o ? { ...o, status: novoStatus } : o));
    if (novoStatus === 'EM_TRANSITO') setHorarios((h) => ({ ...h, saida: agora }));
    if (novoStatus === 'NO_LOCAL') setHorarios((h) => ({ ...h, chegada: agora }));
    if (novoStatus === 'EM_EXECUCAO') setHorarios((h) => ({ ...h, inicio: agora }));
    if (novoStatus === 'CONCLUIDO') setHorarios((h) => ({ ...h, fim: agora }));
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Painel da Equipe</h1>
          <p className="text-gray-400">Olá, {usuario.nome} | Matrícula: {usuario.matricula}</p>
        </div>
        <button onClick={() => { localStorage.removeItem('usuarioLogado'); router.push('/'); }} className="text-red-400 text-sm hover:underline">Sair</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
          <h2 className="text-xl font-bold text-blue-400 mb-4">Dados da Viatura</h2>
          <div className="space-y-3 text-gray-200">
            <p><span className="text-gray-500 block text-xs">VEÍCULO</span> {equipe.carro}</p>
            <p><span className="text-gray-500 block text-xs">EQUIPAMENTOS</span> {equipe.equipamentos}</p>
            <p><span className="text-gray-500 block text-xs">STATUS ATUAL</span>
              <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-sm ml-2">Operacional</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-6">Ocorrência Atual</h2>

          {ocorrencia ? (
            <div>
              <div className="bg-gray-700 p-4 rounded mb-6">
                <h3 className="text-lg font-bold text-white">{ocorrencia.titulo}</h3>
                <p className="text-gray-300">{ocorrencia.endereco}</p>
                <div className="mt-2 flex gap-2">
                  <span className="bg-red-900 text-red-200 px-3 py-1 rounded text-xs font-bold">PRIORIDADE {ocorrencia.prioridade}</span>
                  <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded text-xs font-bold">STATUS: {ocorrencia.status}</span>
                </div>
              </div>

              <div className="space-y-3">
                {ocorrencia.status === 'PENDENTE' && (
                  <button onClick={() => handleStatusChange('EM_TRANSITO')} className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-bold text-lg transition-all">
                    INICIAR DESLOCAMENTO
                  </button>
                )}
                {ocorrencia.status === 'EM_TRANSITO' && (
                  <button onClick={() => handleStatusChange('NO_LOCAL')} className="w-full bg-yellow-600 hover:bg-yellow-700 text-white p-4 rounded-lg font-bold text-lg transition-all">
                    CONFIRMAR CHEGADA NO LOCAL
                  </button>
                )}
                {ocorrencia.status === 'NO_LOCAL' && (
                  <div className="space-y-3">
                    <p className="text-gray-400 text-sm text-center">Faça a avaliação de risco (APR) antes de iniciar.</p>
                    <button onClick={() => handleStatusChange('EM_EXECUCAO')} className="w-full bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg font-bold text-lg transition-all">
                      INICIAR REPARO (APR OK)
                    </button>
                  </div>
                )}
                {ocorrencia.status === 'EM_EXECUCAO' && (
                  <button onClick={() => handleStatusChange('CONCLUIDO')} className="w-full bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg font-bold text-lg transition-all">
                    FINALIZAR OCORRÊNCIA
                  </button>
                )}
                {ocorrencia.status === 'CONCLUIDO' && (
                  <div className="bg-green-900/30 border border-green-800 p-4 rounded text-center">
                    <p className="text-green-400 font-bold text-lg">Ocorrência Baixada com Sucesso</p>
                    <p className="text-gray-400 text-sm">Aguarde nova atribuição da central.</p>
                  </div>
                )}
              </div>

              <div className="mt-8 grid grid-cols-4 gap-2 text-center text-xs text-gray-500">
                <div>Saída: {horarios.saida || '--:--'}</div>
                <div>Chegada: {horarios.chegada || '--:--'}</div>
                <div>Início: {horarios.inicio || '--:--'}</div>
                <div>Fim: {horarios.fim || '--:--'}</div>
              </div>
            </div>
          ) : (
            <p className="text-gray-400">Nenhuma ocorrência atribuída no momento.</p>
          )}
        </div>
      </div>

      {/* Chat com a Central / Equipe */}
      <div className="mt-6">
        <ChatPanel
          channel={ocorrencia ? ocorrencia.id : `equipe-${usuario.equipeId}`}
          senderName={usuario.nome}
          title={ocorrencia ? `Chat — ${ocorrencia.titulo}` : 'Chat da Equipe'}
        />
      </div>
    </div>
  );
}
