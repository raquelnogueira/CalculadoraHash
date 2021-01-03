function WithLoading(Component) {
    return function WithLoading({ isLoading, status, dataResponse }) {
        if (!isLoading) {
            // Referente ao tratamento de erro e responsável pelas mensagens exibidas.
            // Também responsável pelo sucesso e direcionamento a exibição do resultado.
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
                case 100:
                    return (
                        <div>
                            <p style={{ textAlign: 'center' }}>
                                Você está offline :(.
                            </p>
                            <p style={{ textAlign: 'center' }}>
                                Por favor, se reconecte e tente novamente.
                            </p>
                        </div>
                    );
                case 200:
                    return <Component dataResponse={dataResponse} />;
                case 204:
                    return <Component dataResponse={dataResponse} />;
                default:
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
            }

        } else if (status === 1) {
            return (
                <p style={{ textAlign: 'center' }}>
                    Estamos esperando a inserção de todos os valores :)
                </p>
            );
        }
        return (
            <p style={{ textAlign: 'center' }}>
                Espere um pouco, estamos carregando os valores :)
            </p>
        );
    };
}
export default WithLoading;