import React from 'react';

function WithLoading(Component) {

    return function WithLoading({ isLoading, status, ...props }) {

        if (!isLoading) {
            switch (status) {
                case 400:
                    return (
                        // <Component{...props}></Component>
                        <p></p>
                    );
                case 404:
                    return (
                        <p> O preenchimento de algum campo contém um valor incorreto.</p>
                    );
                case 408:
                    return (
                        <div>
                            <p> O tempo para esse retorno expirou :(.</p>
                            <p> Por favor, temte outra vez mais tarde.</p>
                        </div>
                    );
                    case 500:
                    return (
                        <div>
                            <p> Desculpe, recebemos um erro inesperado :(.</p>
                            <p> Por favor, temte outra vez mais tarde.</p>
                        </div>
                    );
            }
        };
        return (
            <p style={{ textAlign: 'center', fontSize: '30px' }}>
                Espere um pouco, estamos carregando os valores :)
            </p>
        );
    };
}
export default WithLoading;