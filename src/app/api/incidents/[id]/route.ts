import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // TODO: Buscar ocorrência pelo ID
    // Retornar com mensagens e histórico de status

    return NextResponse.json({
      success: true,
      data: {
        id,
        title: '',
        status: 'PENDING',
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao buscar ocorrência',
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();

    // TODO: Atualizar ocorrência
    // Atualizar status
    // Registrar no histórico de status

    return NextResponse.json({
      success: true,
      data: { id, ...body },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao atualizar ocorrência',
      },
      { status: 500 }
    );
  }
}
