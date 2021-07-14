import { info } from '../../bio';

export const Bio = () => {
    return <div>

        {JSON.stringify(info, null, '\t')}
    </div>
}