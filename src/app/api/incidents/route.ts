import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // TODO: Implementar lógica de obtenção de ocorrências
    // Conectar com banco de dados via Prisma
    
    const incidents = [];

    return NextResponse.json({
      success: true,
      data: incidents,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao buscar ocorrências',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // TODO: Implementar lógica de criação de ocorrência
    // Validar dados
    // Salvar no banco de dados
    // Alocar equipe automática
    // Enviar notificações

    const incident = {
      id: '1',
      ...body,
      createdAt: new Date(),
    };

    return NextResponse.json(
      {
        success: true,
        data: incident,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao criar ocorrência',
      },
      { status: 500 }
    );
  }
}
