# 🌱 FIAP Farms Mobile

<div align="center">
  <img src="./assets/images/icon.png" alt="FIAP Farms Logo" width="120" height="120">
  
  **Aplicativo móvel para gestão inteligente de fazendas**
  
  [![Expo](https://img.shields.io/badge/Expo-000000?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
  [![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
</div>

## 📱 Sobre o Projeto

O **FIAP Farms Mobile** é uma aplicação móvel desenvolvida para revolucionar a gestão agrícola, oferecendo uma solução completa e intuitiva para produtores rurais. O aplicativo permite monitoramento em tempo real, análise de dados e tomada de decisões baseada em insights inteligentes.

### 🎯 Principais Funcionalidades

- **📊 Dashboard Inteligente**: Visão geral completa da fazenda com métricas em tempo real
- **💰 Gestão de Vendas**: Acompanhamento de vendas, receitas e análise de performance
- **🌿 Controle de Produção**: Monitoramento de culturas, produtividade e recursos
- **📦 Gestão de Estoque**: Controle de inventário e vendas integradas
- **🎯 Sistema de Metas**: Definição e acompanhamento de objetivos de produção
- **🔐 Autenticação Segura**: Login integrado com Firebase Authentication

## 🛠️ Tecnologias Utilizadas

- **Framework**: [Expo](https://expo.dev/) + [React Native](https://reactnative.dev/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Navegação**: [Expo Router](https://docs.expo.dev/router/introduction/)
- **Backend**: [Firebase](https://firebase.google.com/) (Auth)
- **Gráficos**: [React Native Chart Kit](https://github.com/indiespirit/react-native-chart-kit)
- **Estado**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Ícones**: [Expo Vector Icons](https://docs.expo.dev/guides/icons/)

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/go) (para testar no dispositivo físico)

## 🚀 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/DeboraLara1/Fiap-farms-mobile.git
cd fiap-farms-mobile
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Execute o projeto

```bash
npm start
# ou
yarn start
```

## 📱 Como Executar

### Desenvolvimento Local

```bash
# Iniciar o servidor de desenvolvimento
npm start
### Emulador

- **Android**: Abra o Android Studio e inicie um emulador

## 🏗️ Estrutura do Projeto


fiap-farms-mobile/
├── app/                    # Páginas e navegação (Expo Router)
│   ├── (tabs)/            # Abas principais do app
│   │   ├── dashboard.tsx  # Dashboard principal
│   │   ├── sales-dashboard.tsx
│   │   ├── production-dashboard.tsx
│   │   ├── inventory-sales.tsx
│   │   └── goals.tsx
│   ├── login.tsx          # Tela de login
│   └── _layout.tsx        # Layout principal
├── components/            # Componentes reutilizáveis
│   ├── AuthContext.tsx   # Contexto de autenticação
│   ├── HapticTab.tsx     # Componente de tab com feedback
│   └── ui/               # Componentes de interface
├── constants/            # Constantes e configurações
│   ├── Colors.ts         # Paleta de cores
│   └── firebaseConfig.ts # Configuração do Firebase
├── hooks/                # Hooks customizados
└── assets/              # Imagens e recursos
```

## 🎨 Funcionalidades Detalhadas

### 📊 Dashboard Principal
- Visão geral da fazenda
- Métricas de produção
- Alertas e notificações
- Gráficos de performance

### 💰 Gestão de Vendas
- Acompanhamento de vendas
- Análise de receitas
- Relatórios de performance
- Projeções financeiras

### 🌿 Controle de Produção
- Monitoramento de culturas
- Controle de recursos
- Análise de produtividade
- Gestão de safras

### 📦 Estoque e Vendas
- Controle de inventário
- Gestão de produtos
- Integração vendas-estoque
- Alertas de estoque baixo

### 🎯 Sistema de Metas
- Definição de objetivos
- Acompanhamento de progresso
- Notificações de metas
- Relatórios de performance


