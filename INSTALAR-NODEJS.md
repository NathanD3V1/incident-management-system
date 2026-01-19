# 📥 Como Instalar Node.js no Windows

## ⚡ Método Rápido (Recomendado)

### Opção 1: Download Direto (Mais Fácil)

1. **Acesse**: https://nodejs.org/
2. **Baixe a versão LTS** (Long Term Support - Recomendada)
   - Clique no botão verde "LTS" 
   - Será baixado um arquivo `.msi` (ex: `node-v20.x.x-x64.msi`)
3. **Execute o instalador**:
   - Clique duas vezes no arquivo baixado
   - Clique em "Next" em todas as telas
   - **IMPORTANTE**: Marque a opção "Automatically install the necessary tools"
   - Clique em "Install"
   - Aguarde a instalação (2-5 minutos)
4. **Reinicie o PowerShell** (fechar e abrir novamente)

### Opção 2: Via Chocolatey (Se já tiver instalado)

```powershell
choco install nodejs-lts
```

### Opção 3: Via PowerShell (Windows 10/11)

```powershell
# Abra PowerShell como Administrador e execute:
winget install OpenJS.NodeJS.LTS --accept-source-agreements --accept-package-agreements
```

---

## ✅ Verificar Instalação

Após instalar e **reiniciar o PowerShell**, execute:

```powershell
node --version
npm --version
```

Você deve ver algo como:
```
v20.10.0
10.2.3
```

Se ainda não funcionar:
1. Feche completamente o PowerShell
2. Abra um novo PowerShell
3. Tente novamente

---

## 🚀 Depois de Instalar o Node.js

### 1. Instalar Dependências do Projeto

```powershell
# Certifique-se de estar na pasta do projeto
cd C:\Users\natha\OneDrive\Desktop\incident-management-system\incident-management-system

# Instale as dependências
npm install
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```powershell
# Copie este conteúdo para um arquivo chamado .env.local
```

Conteúdo do `.env.local`:
```env
# Banco de dados (você precisará instalar PostgreSQL também)
DATABASE_URL="postgresql://postgres:sua_senha@localhost:5432/incident_management"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="gere-uma-chave-secreta-aqui"

# Socket.IO
NEXT_PUBLIC_SOCKET_URL="http://localhost:3000"
```

### 3. Gerar Chave Secreta (NEXTAUTH_SECRET)

No PowerShell, execute:

```powershell
$bytes = [System.Text.Encoding]::UTF8.GetBytes((Get-Random).ToString())
$base64 = [Convert]::ToBase64String($bytes)
$base64
```

Copie a saída e cole no lugar de `"gere-uma-chave-secreta-aqui"` no arquivo `.env.local`

---

## 📋 Checklist de Instalação

- [ ] Node.js instalado (`node --version` funciona)
- [ ] npm instalado (`npm --version` funciona)
- [ ] Dependências instaladas (`npm install` executado)
- [ ] Arquivo `.env.local` criado
- [ ] PostgreSQL instalado (necessário para o banco de dados)
- [ ] Banco de dados criado
- [ ] Migrações executadas (`npx prisma migrate dev`)

---

## 🆘 Problemas Comuns

### "node não é reconhecido"
- **Solução**: Reinicie o PowerShell completamente
- Verifique se o Node.js foi instalado corretamente
- Tente fechar e abrir um novo terminal

### "npm não é reconhecido"
- **Solução**: O npm vem com o Node.js, então se o npm não funciona, o Node.js não está instalado corretamente
- Reinstale o Node.js

### Porta 3000 já em uso
```powershell
# Use uma porta diferente
npm run dev -- -p 3001
```

---

## 📚 Próximos Passos

Após instalar o Node.js:

1. Leia: `QUICKSTART.md` - Guia rápido de 5 minutos
2. Leia: `docs/WINDOWS-SETUP.md` - Setup completo para Windows
3. Configure o PostgreSQL (necessário para o banco de dados)

---

**Precisa de ajuda?** Consulte `docs/WINDOWS-SETUP.md` para um guia completo!
