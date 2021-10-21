import { serverHttp } from './app';

serverHttp.listen(process.env.PORT, () => console.log(`server is running on PORT ${process.env.PORT}`));