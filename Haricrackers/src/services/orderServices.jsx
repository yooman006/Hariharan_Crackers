export const submitOrder = async (orderData) => {
  const response = await fetch('https://haricrackerbackend-f9a2d9fpdcathmet.southeastasia-01.azurewebsites.net/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to submit order');
  }

  return await response.json();
};
