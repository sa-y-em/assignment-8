export const fetchingData = async () => {
    const datas = await fetch("https://ass8final.vercel.app/allData.json");
     const allData = await datas.json()
    
    return allData;
};
