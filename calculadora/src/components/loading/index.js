import React from 'react';

function WithLoading(Component) {

    return function WithLoading({ isLoading, status, ...props }) {
        console.log(status);
        if (!isLoading) {
            switch (status) {
                case 408:
                    return (
                        <p style={{ textAlign: 'center', fontSize: '30px' }}>
                            O tempo de carregamento excedeu o limite :(.
                        </p>);
                default:
                    return <Component {...props} />;
            }

        }
        return (
            <p style={{ textAlign: 'center', fontSize: '30px' }}>
                Espere um pouco, estamos carregando os valores :)
            </p>
        );
    };
}
export default WithLoading;