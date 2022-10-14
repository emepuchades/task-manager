import { Link } from 'react-router-dom'
import { BsHeartFill } from 'react-icons/bs'

import { Block, CardText, BlockBoard } from './favorites.style'

function Favorites({ boards, fav }) {
    return (
        <>
            <Block>
                <BlockBoard>
                    {boards
                        ? boards.map((board, index) =>
                              board.fav ? (
                                  <>
                                      <Link
                                          className='card'
                                          to={`/project/${board.name}`}
                                          key={index}
                                      >
                                          <CardText>{board.name}</CardText>
                                      </Link>
                                      <BsHeartFill
                                          className='heartfill iconheart'
                                          onClick={() => fav(board, false)}
                                      />
                                  </>
                              ) : null
                          )
                        : null}
                </BlockBoard>
            </Block>
        </>
    )
}

export default Favorites
