# Previsão do Tempo - Aplicativo React

Este é um aplicativo de previsão do tempo desenvolvido em **React**, com informações dinâmicas sobre clima e temperatura usando a API do OpenWeather. O projeto inclui componentes que exibem o clima atual, a sensação térmica, pressão, umidade e temperatura máxima/minima, com base na cidade pesquisada ou na localização geográfica do usuário.

## Tecnologias Usadas

- **Typescript**: Para tipagem e melhor controle no desenvolvimento.
- **React**: Framework JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS para estilização do layout de forma rápida e eficiente.
- **Axios**: Para fazer requisições HTTP para a API do OpenWeather.
- **Framer Motion**: Para animações suaves e transições nos componentes.
- **React Icons**: Para ícones relacionados ao clima (sol, chuva, neve, etc.).
- **Toastify**: Para exibição de mensagens de erro e sucesso.
- **API do OpenWeather**: Para pegar as informações de clima em tempo real.

## Funcionalidades

- Exibição de informações de tempo em tempo real.
- Atualização dinâmica de horário, data e clima.
- Pesquisar clima por cidade ou usar a localização geográfica do usuário.
- Animações e transições de exibição de informações.
- Exibição de temperatura, sensação térmica, pressão e umidade.
- Feedback de erros ao tentar buscar dados de uma cidade inexistente.

## Instalação

1. Clone o repositório:

     ```bash
     https://github.com/Leonardobern10/ClimaApp-React.git
     ```

2. Navegue até a pasta do projeto:

     ```bash
     cd ClimaApp-React
     ```

3. Instale as dependências do projeto:

     ```bash
     npm install
     ```

4. Crie uma variável de ambiente `VITE_API_KEY` com a sua chave da API do OpenWeather:

     - Crie um arquivo `.env` na raiz do projeto e adicione sua chave:

          ```
          VITE_API_KEY=SuaChaveDaAPI
          ```

5. Inicie o servidor de desenvolvimento:

     ```bash
     npm run dev
     ```

6. Abra o aplicativo em [http://localhost:5173](http://localhost:5173).

## Estrutura do Projeto

- **src/components/**: Contém todos os componentes React principais.

     - `Display.tsx`: Exibe a previsão do tempo atual.
     - `InfoTemp.tsx`: Exibe informações adicionais sobre a temperatura, como mínima, máxima, umidade e pressão.
     - `LoadingSpinner.tsx`: Exibe um indicador de carregamento enquanto as informações estão sendo buscadas.
     - `SearchComponent.tsx`: Componente de pesquisa de cidade.

- **src/model/**: Contém os modelos de dados utilizados no aplicativo, como `InfoWeather`, `Temp` e `Weather`.
- **src/services/**: Contém serviços de integração com a API do OpenWeather e outros utilitários.

## Exemplo de Uso

- **Buscar clima por cidade**: O usuário pode pesquisar por uma cidade, e o aplicativo exibirá a previsão do tempo para essa localidade.
- **Usar localização geográfica**: Caso o usuário permita o acesso à sua localização, o aplicativo automaticamente buscará o clima de sua região.

## Licença

Este projeto está sob a licença MIT.

## Contribuições

Sinta-se à vontade para fazer contribuições! Se você tiver melhorias ou correções, fique à vontade para abrir uma _pull request_.

## Me encontre

<div style="width: full; display: flex; flex-direction: row; gap: 12px">
  <a href="https://www.linkedin.com/in/leonardo-bernardo25/" target="_blank">
    <img src="public/linkedin-svgrepo-com.svg" alt="Meu LinkedIn" width="60" />
  </a>
  <a href="https://portfolio-leonardo25.vercel.app/" target="_blank">
    <img src="public/user.svg" alt="Meu portfólio" width="60" />
  </a>
  <a href="mailto:leonardo@example.com">
       <img src="public/gmail-svgrepo-com.svg" alt="Meu portfólio" width="60" />
  </a>
</div>
