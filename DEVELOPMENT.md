# Instruções de Desenvolvimento

Este arquivo contém as instruções de desenvolvimento para o Sistema de Gestão de Ocorrências.

## 1. Setup Inicial

### Instalação de Dependências
```bash
npm install
```

### Configuração do Banco de Dados

1. Instale PostgreSQL se ainda não tiver
2. Crie um banco de dados:
   ```sql
   CREATE DATABASE incident_management;
   ```

3. Configure o arquivo `.env.local`:
   ```
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/incident_management"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="gere-uma-chave-com-openssl-rand-base64-32"
   NEXT_PUBLIC_SOCKET_URL="http://localhost:3000"
   ```

4. Execute as migrações:
   ```bash
   npx prisma migrate dev --name init
   ```

5. (Opcional) Popule com dados de teste:
   ```bash
   npx prisma db seed
   ```

## 2. Desenvolvimento

### Inicie o servidor:
```bash
npm run dev
```

Acesso:
- **Home**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin
- **Team Panel**: http://localhost:3000/team

### Estrutura de Desenvolvimento

#### Criar novas páginas:
- Admin: `src/app/admin/[page]/page.tsx`
- Team: `src/app/team/[page]/page.tsx`

#### Criar novos componentes:
- Crie em `src/components/[feature]/`
- Mantenha componentes pequenos e reutilizáveis

#### Adicionar novas rotas de API:
- Crie em `src/app/api/[resource]/route.ts`
- Use NextRequest/NextResponse

## 3. Implementações Pendentes

### Autenticação (Priority: HIGH)
- [ ] Implementar NextAuth.js com credenciais
- [ ] Criar página de login
- [ ] Implementar proteção de rotas
- [ ] Adicionar logout

**Arquivo**: `src/app/api/auth/[...nextauth]/route.ts`

### Banco de Dados (Priority: HIGH)
- [ ] Implementar funções Prisma em `src/lib/db/`
- [ ] CRUD para Incidents
- [ ] CRUD para Teams
- [ ] CRUD para Messages
- [ ] Funções de alocação automática

**Arquivos**:
```
src/lib/db/
├── incidents.ts
├── teams.ts
├── messages.ts
└── users.ts
```

### Chat em Tempo Real (Priority: MEDIUM)
- [ ] Configurar Socket.IO server
- [ ] Implementar Socket.IO client no React
- [ ] Listeners de eventos
- [ ] Persistência de mensagens

**Arquivo**: `src/lib/socket.ts`

### Componentes UI (Priority: MEDIUM)
- [ ] Modal de criação de ocorrência
- [ ] Card de ocorrência
- [ ] Timeline de status
- [ ] Chat widget
- [ ] Map com localização de equipes

**Pasta**: `src/components/`

### Notificações (Priority: MEDIUM)
- [ ] Implementar notificações push
- [ ] Alertas de mudança de status
- [ ] Notificações de novas mensagens

### Geolocalização (Priority: LOW)
- [ ] Rastreamento de GPS das equipes
- [ ] Mapa interativo
- [ ] Distância/tempo de chegada

## 4. Padrões de Código

### TypeScript
- Sempre use tipos explícitos
- Crie interfaces em `src/types/`
- Use `as const` para enums

### Componentes React
- Use componentes funcionais com hooks
- Prefira hooks customizados
- Mantenha componentes pequenos (<200 linhas)

### API Routes
- Sempre retorne `ApiResponse<T>`
- Trate erros com try/catch
- Valide inputs

### Prisma
- Use transactions para operações críticas
- Implemente soft deletes quando apropriado
- Crie índices para campos frequentemente consultados

## 5. Testes

### Executar testes:
```bash
npm test
```

### Criar testes:
- Unitários: `__tests__/unit/`
- Integração: `__tests__/integration/`
- E2E: `__tests__/e2e/`

## 6. Deploy

### Build para produção:
```bash
npm run build
npm start
```

### Usar Vercel (Recomendado):
1. Conecte o repositório no Vercel
2. Configure variáveis de ambiente
3. Deploy automático em push

## 7. Recursos Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [NextAuth.js](https://next-auth.js.org)
- [Socket.IO](https://socket.io)

## 8. Troubleshooting

### Erro: "DATABASE_URL not set"
- Verifique `.env.local`
- Restart do servidor

### Erro: "Prisma Client not generated"
- Execute: `npx prisma generate`

### Porta 3000 já em uso
- Use: `npm run dev -- -p 3001`

---

**Última atualização**: 19 de janeiro de 2026
