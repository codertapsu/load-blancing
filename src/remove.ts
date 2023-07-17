import axios from 'axios';
const token =
  '';

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

const getIds = async () => {
  try {
    const response = await axios.get(`https://graph.facebook.com/109192085349453/videos?access_token=${token}&limit=999`);
    const ids = ((response.data?.data || []) as any[]).map(item => item.id).filter(Boolean);

    return ids;
  } catch (error) {
    return [];
  }
};

const oneMin = 1000 * 60;
const remove = async (id: string) => {
  console.time(`Duration`);
  try {
    await axios.delete(`https://graph.facebook.com/${id}?access_token=${token}`);
    console.log(`Removed: ${id}`);
  } catch (error) {
    console.log(error);
    
  }
  console.timeEnd(`Duration`);
};

const run = async () => {
  const ids = await getIds();

  for (let index = 0, length = ids.length; index < length; index++) {
    await remove(ids[index]);
    console.log(`Completed: ${index + 1}/${length}`);
    await sleep(oneMin);
  }
};

run();
