# 🔧 Solução para Erro 1603 na Instalação do Node.js

## ❌ Problema

O instalador do Node.js falhou com o código de erro **1603**. Este é um erro comum do Windows Installer que geralmente indica problemas de permissão ou conflitos.

---

## ✅ SOLUÇÃO 1: Download Manual (MAIS CONFIÁVEL)

Esta é a forma mais confiável e recomendada:

### Passo a Passo:

1. **Acesse o site oficial**:
   - Abra: https://nodejs.org/
   - Clique no botão **VERDE "LTS"** (versão estável recomendada)

2. **Baixe o instalador**:
   - Será baixado um arquivo `.msi` (ex: `node-v24.13.0-x64.msi`)
   - O arquivo ficará na pasta Downloads

3. **Execute como Administrador**:
   - Clique com o botão direito no arquivo `.msi` baixado
   - Selecione **"Executar como administrador"**
   - Clique "Sim" na janela de permissão

4. **Instale o Node.js**:
   - Clique "Next" em todas as telas
   - **IMPORTANTE**: Marque a opção "Automatically install the necessary tools"
   - Clique "Install"
   - Aguarde a instalação (2-5 minutos)
   - Clique "Finish"

5. **Reinicie o PowerShell**:
   - Feche TODOS os PowerShells abertos
   - Abra um NOVO PowerShell
   - Execute: `node --version`

---

## ✅ SOLUÇÃO 2: Executar winget como Administrador

Se preferir usar winget, tente executar como Administrador:

1. **Feche o PowerShell atual**

2. **Abra PowerShell como Administrador**:
   - Pressione `Win + X`
   - Clique em "Windows PowerShell (Admin)" ou "Terminal (Admin)"
   - Clique "Sim" na janela de permissão

3. **Execute o comando**:
```powershell
winget install OpenJS.NodeJS.LTS --accept-source-agreements --accept-package-agreements
```

4. **Aguarde a instalação**

5. **Feche e abra um novo PowerShell** (não precisa ser admin)

---

## ✅ SOLUÇÃO 3: Limpar Instalação Anterior (se houver)

Se houver uma instalação parcial ou corrompida:

1. **Desinstalar versões antigas**:
   - Abra "Configurações" > "Aplicativos"
   - Procure por "Node.js"
   - Se encontrar, desinstale

2. **Limpar cache do winget** (opcional):
```powershell
winget uninstall OpenJS.NodeJS.LTS
```

3. **Tente instalar novamente** usando a Solução 1 ou 2

---

## ✅ SOLUÇÃO 4: Usar Chocolatey (se tiver instalado)

Se você tem Chocolatey instalado:

1. **Abra PowerShell como Administrador**

2. **Execute**:
```powershell
choco install nodejs-lts -y
```

---

## 🔍 Verificar Instalação

Após instalar usando qualquer método acima:

1. **Feche TODOS os PowerShells**

2. **Abra um NOVO PowerShell** (não precisa ser admin)

3. **Execute**:
```powershell
node --version
npm --version
```

Você deve ver algo como:
```
v24.13.0
10.9.0
```

---

## 🚀 Próximos Passos Após Instalar

1. **Navegue até a pasta do projeto**:
```powershell
cd C:\Users\natha\OneDrive\Desktop\incident-management-system\incident-management-system
```

2. **Instale as dependências**:
```powershell
npm install
```

3. **Configure o ambiente** (veja `CONFIGURAR-AMBIENTE.md`)

4. **Inicie o servidor**:
```powershell
npm run dev
```

---

## 🆘 Ainda com Problemas?

### Erro 1603 Persiste:

1. **Verifique permissões**:
   - Certifique-se de executar como Administrador
   - Verifique se o antivírus não está bloqueando

2. **Desative temporariamente o antivírus** durante a instalação

3. **Use o download manual** (Solução 1) - é mais confiável

4. **Verifique espaço em disco**:
   - O Node.js precisa de pelo menos 200 MB livres

### Node.js instalado mas não funciona:

1. **Reinicie o computador** (às vezes necessário)

2. **Verifique o PATH**:
```powershell
$env:PATH -split ';' | Select-String -Pattern 'node'
```

3. **Reinstale o Node.js** usando o download manual

---

## 📚 Recursos Úteis

- Site oficial: https://nodejs.org/
- Documentação: https://nodejs.org/docs/
- Problemas conhecidos: https://github.com/nodejs/node/issues

---

**Recomendação**: Use a **Solução 1 (Download Manual)** - é a forma mais confiável e evita problemas de permissão!
