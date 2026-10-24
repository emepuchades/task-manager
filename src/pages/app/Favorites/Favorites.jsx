import { Link } from 'react-router-dom'
import { BsHeartFill } from 'react-icons/bs'

import {
    Block,
    TextList,
    CardBoard,
    CardCover,
    CardIcon,
    CardText,
    CardEmpty,
    CardSkeleton,
    BlockBoard,
} from './favorites.style'

function Favorites({ boards, loading, fav }) {
    const favorites = boards ? boards.filter(board => board.fav) : []

    return (
        <>
            <Block>
                <TextList>
                    Favoritos {!loading && <span>{favorites.length}</span>}
                </TextList>
                <BlockBoard aria-busy={loading}>
                    {loading ? (
                        [0, 1].map(index => <CardSkeleton key={index} />)
                    ) : favorites.length > 0 ? (
                        favorites.map((board, index) => (
                            <CardBoard
                                key={index}
                                className={`color-${index % 6}`}
                            >
                                <Link
                                    className='card'
                                    to={`/project/${board.id}`}
                                >
                                    <CardCover>
                                        <CardIcon>{board.name[0]}</CardIcon>
                                    </CardCover>
                                    <CardText>{board.name}</CardText>
                                </Link>
                                <BsHeartFill
                                    className='heartfill iconheart'
                                    onClick={() => fav(board, false)}
                                />
                            </CardBoard>
                        ))
                    ) : (
                        <CardEmpty>
                            Marca un proyecto con el corazón para tenerlo a
                            mano aquí.
                        </CardEmpty>
                    )}
                </BlockBoard>
            </Block>
        </>
    )
}

export default Favorites
