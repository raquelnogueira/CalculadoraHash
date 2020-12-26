function WithLoading(Component) {
    return function WithLoading({ isLoading, status, dataResponse }) {
        if (!isLoading) {
            switch (status) {
                case 408:
                    return (
                        <p style={{ textAlign: 'center', fontSize: '30px' }}>
                            O tempo de carregamento excedeu o limite :(.
                        </p>);

                //TODO: Outros tratamentos
                default:
                    return <Component dataResponse={dataResponse} />;
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