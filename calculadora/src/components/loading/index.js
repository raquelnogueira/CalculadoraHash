import React from 'react';

function WithLoading(Component) {
//   return function WihComponent({ isLoading, ...props }) {
//     if (!isLoading) return <Component {...props} />;
//     return (
//       <p style={{ textAlign: 'center', fontSize: '30px' }}>
//         Espere um pouco, estamos carregando os valores :)
//       </p>
//     );
//   };


return function WithLoading({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Espere um pouco, estamos carregando os valores :)
      </p>
    );
  };
}
export default WithLoading;