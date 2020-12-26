function WithLoading(Component) {
    return function WithLoading({ isLoading, status, dataResponse }) {
        if (!isLoading) {
            switch (status) {
                case 408:
                    return (
                        <div>
                            <p style={{ textAlign: 'center' }}>
                                O tempo de carregamento excedeu o limite :(.
                            </p>
                            <p style={{ textAlign: 'center' }}>
                                Por favor, tente novamente mais tarde.
                            </p>
                        </div>
                    );
                case 400:
                    return (
                        <div>
                            <p style={{ textAlign: 'center' }}>
                                Ocorreu um erro referente aos dados enviados:
                            </p>
                            <p style={{ textAlign: 'center' }}>
                                {dataResponse.message}
                            </p>
                        </div>
                    );
                case 500:
                    return (
                        <div>
                            <p style={{ textAlign: 'center' }}>
                                Ocorreu um erro inesperado :(.
                            </p>
                            <p style={{ textAlign: 'center' }}>
                                Por favor, tente novamente mais tarde.
                            </p>
                        </div>
                    );
                default:
                    return <Component dataResponse={dataResponse} />;
            }

        }
        return (
            <p style={{ textAlign: 'center' }}>
                Espere um pouco, estamos carregando os valores :)
            </p>
        );
    };
}
export default WithLoading;