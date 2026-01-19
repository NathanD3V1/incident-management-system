import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const companyId = searchParams.get('companyId');

    // TODO: Buscar equipes da empresa
    // Filtrar por status disponível se solicitado

    const teams = [];

    return NextResponse.json({
      success: true,
      data: teams,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao buscar equipes',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // TODO: Criar nova equipe
    // Validar dados
    // Salvar no banco de dados

    const team = {
      id: '1',
      ...body,
      status: 'AVAILABLE',
      createdAt: new Date(),
    };

    return NextResponse.json(
      {
        success: true,
        data: team,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao criar equipe',
      },
      { status: 500 }
    );
  }
}
