import { useContext } from 'react'
import SingleItem from './SingleItem'

import RootContext from '../../context'

export default function Result()
{

    let { videos, error } = useContext(RootContext)
    
    let noVideoOrError;

    if(error)
    {
        noVideoOrError = <div className="alert alert-danger">There is an error, please try again</div>
    } else {
        noVideoOrError = 'No Videos... Search to get result here'
    }

    return (
        <div className="ResultContainer">
        {
            (videos.length > 0) ? videos.map(v => <SingleItem key={v.etag} item={v} />)
            : noVideoOrError
        }
        </div>
    )
}