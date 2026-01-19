# 🚀 Guia Rápido de Inicialização

## ⚡ 5 Minutos para Começar

### 1️⃣ Instale as dependências
```bash
npm install
```

### 2️⃣ Configure o banco de dados

#### Opção A: PostgreSQL Local
```bash
# Crie um banco PostgreSQL
createdb incident_management

# Copie o arquivo de ambiente
cp .env.example .env.local

# Edite .env.local com suas credenciais:
# DATABASE_URL="postgresql://usuario:senha@localhost:5432/incident_management"
```

#### Opção B: Use um banco existente
Apenas atualize o `DATABASE_URL` no `.env.local`

### 3️⃣ Configure variáveis de ambiente

Edite `.env.local`:
```env
# Banco de dados (obrigatório)
DATABASE_URL="postgresql://usuario:senha@localhost:5432/incident_management"

# NextAuth (gerador de chaves: openssl rand -base64 32)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="sua-chave-secreta-aqui"

# Socket.IO
NEXT_PUBLIC_SOCKET_URL="http://localhost:3000"
```

### 4️⃣ Execute as migrações do banco
```bash
# Criar tabelas e schema
npx prisma migrate dev --name init

# (Opcional) Popular com dados de teste
# npx prisma db seed
```

### 5️⃣ Inicie o servidor
```bash
npm run dev
```

## 📱 Acesse a aplicação

- **Home**: http://localhost:3000
- **Admin**: http://localhost:3000/admin
- **Equipe**: http://localhost:3000/team

---

## 🎯 Próximos Passos Recomendados

1. **Implementar Autenticação** (Priority: 🔴 CRÍTICO)
   - Arquivo: `src/app/api/auth/[...nextauth]/route.ts`
   - Criar página de login
   - Testar com dados reais

2. **Conectar API com BD** (Priority: 🔴 CRÍTICO)
   - Arquivos em: `src/lib/db/`
   - Implementar CRUD para Incidents, Teams, Messages
   - Testar com Postman (use `docs/postman-collection.json`)

3. **Implementar Chat** (Priority: 🟠 ALTO)
   - Configurar Socket.IO
   - Conectar com banco de dados
   - Testar em tempo real

4. **Criar Componentes** (Priority: 🟠 ALTO)
   - Modal de criação de ocorrência
   - Cards de status
   - Timeline de progresso

5. **Deploy** (Priority: 🟡 MÉDIO)
   - Conectar com Vercel
   - Configurar variáveis de ambiente
   - Deploy automático

---

## 🐛 Troubleshooting

### ❌ Erro: "DATABASE_URL not set"
```bash
# Verifique se o arquivo .env.local existe
cat .env.local

# Restart do servidor
npm run dev
```

### ❌ Erro: "Prisma Client not found"
```bash
# Gere o cliente Prisma novamente
npx prisma generate
```

### ❌ Erro: "EADDRINUSE: address already in use :::3000"
```bash
# Use uma porta diferente
npm run dev -- -p 3001
```

### ❌ Erro: "relation does not exist"
```bash
# Execute as migrações novamente
npx prisma migrate dev
```

---

## 📚 Documentação Útil

| Arquivo | Descrição |
|---------|-----------|
| [README.md](../README.md) | Visão geral do projeto |
| [DEVELOPMENT.md](../DEVELOPMENT.md) | Guia detalhado de desenvolvimento |
| [docs/API.md](../docs/API.md) | Documentação dos endpoints |
| [docs/ARCHITECTURE.md](../docs/ARCHITECTURE.md) | Arquitetura e diagramas |
| [docs/exemplo-dados.sql](../docs/exemplo-dados.sql) | Dados de exemplo para testes |

---

## 🛠️ Ferramentas Úteis

### Prisma Studio (GUI para banco)
```bash
npx prisma studio
```

### Listar modelos do banco
```bash
npx prisma db push --skip-generate
```

### Reset do banco (cuidado!)
```bash
npx prisma migrate reset
```

---

## 📱 Testar no Mobile

### Com PWA (Progressive Web App)
1. Acesse `http://localhost:3000` em um celular/tablet
2. Clique em "Adicionar à tela inicial"
3. Funcionará como um app nativo!

### Com Ngrok (acesso externo)
```bash
# Terminal 1: Inicie o servidor
npm run dev

# Terminal 2: Crie um túnel
npx ngrok http 3000

# Use a URL do ngrok em seu dispositivo
```

---

## 🚢 Deploy em Produção

### Vercel (Recomendado)

1. **Conecte seu repositório**:
   - Vá para https://vercel.com
   - Clique "Import Project"
   - Selecione seu repositório

2. **Configure variáveis de ambiente**:
   - DATABASE_URL
   - NEXTAUTH_SECRET
   - NEXTAUTH_URL

3. **Deploy automático**:
   - Cada push ativa deploy automático

```bash
# Build local
npm run build
npm start
```

---

## 💡 Dicas Importantes

✅ **Sempre use TypeScript** - O projeto já está configurado
✅ **Valide inputs** - A segurança é importante
✅ **Use Prisma para queries** - Evite SQL puro
✅ **Commit frequente** - Versione seu código
✅ **Teste seus endpoints** - Use Postman/Insomnia

---

## 🎓 Recursos de Aprendizado

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 📞 Precisa de Ajuda?

1. Verifique a documentação em `docs/`
2. Procure por issues conhecidas em `DEVELOPMENT.md`
3. Consulte os exemplos em `docs/exemplo-dados.sql`
4. Use `npx prisma studio` para debugar o banco

---

**Boa sorte com o desenvolvimento! 🎉**

Última atualização: 19 de janeiro de 2026
