# ⚙️ Configurar Variáveis de Ambiente

## 📝 Passo a Passo

### 1. Criar o arquivo `.env.local`

Na raiz do projeto, crie um arquivo chamado `.env.local` com o seguinte conteúdo:

```env
# ============================================
# CONFIGURAÇÃO DO BANCO DE DADOS
# ============================================
DATABASE_URL="postgresql://postgres:sua_senha_aqui@localhost:5432/incident_management"

# ============================================
# NEXTAUTH.JS (Autenticação)
# ============================================
NEXTAUTH_URL="http://localhost:3000"

# Gere uma chave secreta executando no PowerShell:
# $bytes = [System.Text.Encoding]::UTF8.GetBytes((Get-Random).ToString())
# $base64 = [Convert]::ToBase64String($bytes)
# $base64
NEXTAUTH_SECRET="substitua-por-uma-chave-secreta-gerada"

# ============================================
# SOCKET.IO (Chat em Tempo Real)
# ============================================
NEXT_PUBLIC_SOCKET_URL="http://localhost:3000"
```

### 2. Gerar Chave Secreta (NEXTAUTH_SECRET)

No PowerShell, execute:

```powershell
$bytes = [System.Text.Encoding]::UTF8.GetBytes((Get-Random).ToString())
$base64 = [Convert]::ToBase64String($bytes)
$base64
```

Copie a saída e substitua `"substitua-por-uma-chave-secreta-gerada"` no arquivo `.env.local`

### 3. Configurar DATABASE_URL

Substitua `sua_senha_aqui` pela senha do seu PostgreSQL e ajuste se necessário:
- `postgres` = usuário do banco (padrão)
- `localhost` = host do banco
- `5432` = porta do PostgreSQL (padrão)
- `incident_management` = nome do banco de dados

### 4. Criar o Banco de Dados

Se ainda não criou o banco, execute no PostgreSQL:

```sql
CREATE DATABASE incident_management;
```

Ou via PowerShell (se o PostgreSQL estiver no PATH):

```powershell
psql -U postgres -c "CREATE DATABASE incident_management;"
```

---

## ✅ Verificar Configuração

Após criar o arquivo `.env.local`, você pode verificar se está correto:

```powershell
# Ver conteúdo do arquivo (sem mostrar senhas)
Get-Content .env.local
```

---

## 🚨 Importante

- ⚠️ **NUNCA** commite o arquivo `.env.local` no Git
- ✅ O arquivo já está no `.gitignore` para sua segurança
- 🔒 Mantenha suas senhas seguras e privadas

---

## 📚 Próximos Passos

Após configurar o `.env.local`:

1. Execute as migrações: `npx prisma migrate dev --name init`
2. Inicie o servidor: `npm run dev`
3. Acesse: http://localhost:3000
