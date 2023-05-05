async function getPokmanData(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

async function getTypesImage({
  urlOne,
  urlTwo,
}: {
  urlOne: string;
  urlTwo: string;
}): Promise<{ one: string; two: string }> {
  try {
    const [typeOneResponse, typeTwoResponse] = await Promise.all([
      fetch(urlOne),
      fetch(urlTwo),
    ]);
    const [typeOneData, typeTwoData] = await Promise.all([
      typeOneResponse.json(),
      typeTwoResponse.json(),
    ]);
    return {
      one: typeOneData.sprites.default,
      two: typeTwoData.sprites.default,
    };
  } catch (error: any) {
    throw new Error(
      `Error occurred while fetching type images: ${error.message}`
    );
  }
}

export { getPokmanData, getTypesImage };
