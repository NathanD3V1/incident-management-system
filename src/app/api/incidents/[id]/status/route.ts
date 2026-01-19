import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { status, notes } = body;

    // TODO: Atualizar status da ocorrência
    // Criar registro em StatusHistory
    // Atualizar status da equipe se necessário
    // Enviar notificações

    return NextResponse.json({
      success: true,
      data: {
        id,
        status,
        notes,
        timestamp: new Date(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao atualizar status',
      },
      { status: 500 }
    );
  }
}
