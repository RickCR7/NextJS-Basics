// user -> * -> settings

import {useRouter} from 'next/router'

const Page = () => {
    const {query} = useRouter()
    // console.log(router);
            //or
    // cosnt router = useRouter() -> {router.query.username}

    return (
        <div>
            <h1>This is a setting page for {query.username}</h1>
        </div>
    )
}

export default Page;