# o que é o this e para que serve?

Para entender o this é necessário estar inserida em um contexto.

Ou seja, o comportamento do this depende :

1.  Escopo e Contexto
2.  Modo Estrito


## 1 Escopo e Contexto

Escopo (scope)

- Acesso às variáveis, funções e objetos numa parte do código, durante o tempo de execução. 
- Determina a visibilidade desses recursos em alguma parte do código 
- Sempre que invocamos uma função, estamos criando um novo scope. 

Contexto (context)

- Enquanto o scope se refere a diversas referências, o context se refere ao valor do 'this' no mesmo 'scope'
- Pode ser mudado com funções especiais como: .apply(), .call() e .bind()
- No contexto de execução 'exucution context' o contexto já não é mais esse contexto que estamos discutindo. Ele será o 'scope'

Temos 2 tipos de Scopes:

1. Global
    1.No momento que começamos a escrever código, estamos nesse contexto.
    2. Existe enquanto existir a aplicação
2. Local
    1. Dentro de alguma função, variáveis estão no escopo (contexto) local.
    2. Existe enquanto existir a função ou o objeto. 

## 2 Modo Estrito (strict mode)

- Muda a semântica do javascript
- É opcional
- `"use strict"` para habilitar no contexto
- Elimina alguns erros silenciosos
- Evita algumas confusões
- Proíbe algumas sintaxes

- No contexto dentro da função, o this 