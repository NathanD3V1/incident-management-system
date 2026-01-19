import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const incidentId = searchParams.get('incidentId');

    // TODO: Buscar mensagens da ocorrência
    // Ordenar por data

    const messages = [];

    return NextResponse.json({
      success: true,
      data: messages,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao buscar mensagens',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { incidentId, content } = body;

    // TODO: Criar nova mensagem
    // Validar dados
    // Salvar no banco de dados
    // Emitir evento via Socket.IO

    const message = {
      id: '1',
      incidentId,
      content,
      senderId: 'user-id',
      createdAt: new Date(),
    };

    return NextResponse.json(
      {
        success: true,
        data: message,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao enviar mensagem',
      },
      { status: 500 }
    );
  }
}
