// src/lib/dados.ts

export const USUARIOS = [
  // ADMIN - Matrícula 9999
  { matricula: "9999", nome: "Central de Operações", cargo: "ADMIN" },
  
  // EQUIPE DE CAMPO - Matrícula 1001
  { 
    matricula: "1001", 
    nome: "Nathan (Líder)", 
    cargo: "EQUIPE", 
    equipeId: "EQ-01" 
  }
];

export const EQUIPES = [
  {
    id: "EQ-01",
    nome: "Equipe Alpha (Zona Sul)",
    carro: "Fiat Strada - Placa OEX-9090",
    equipamentos: "Kit Alta Tensão, Escada 7m, Drone Térmico",
    status: "Disponível"
  }
];

export const OCORRENCIAS = [
  {
    id: "OC-500",
    titulo: "Reparo Elétrico - Av. Paulista",
    endereco: "Av. Paulista, 1000",
    prioridade: "Alta",
    status: "PENDENTE", // Status inicial
    equipeId: "EQ-01",
    lat: -23.561684, // Coordenadas para o mapa
    lng: -46.655981
  }
];