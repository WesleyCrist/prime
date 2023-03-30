# Número primo

    de acordo com o número enviado na requisição, o app retornará se o mesmo é primo ou não, juntamente com seus divisíveis.

## Utilização

    <!-- ip da aplicação -->
    http://localhost:${port}/prim/${number}

    rota /prim seguida com número que será verificado

### Exemplo

    http://localhost:8081/prim/11

    Resposta

        {
	        "sent": 11,
	        "divisible": [
		        1,
		        11
	        ],
	        "cousin": "11 is it cousin? true"
        }

## Regras

    O número a ser verificado não deve ser maior que 2147483647, ou seja, 32 bits
    O número a ser enviado não deve ser negativo ou ser zero