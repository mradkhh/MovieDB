import React, {FC, memo, useEffect} from 'react';
import Button from "components/UI/Buttons/Button";
import cl from './Pagination.module.scss'

interface PaginationProps {
    page: number,
    setPage: (page: number) => void,
    pages: number,
    className?: string
}


const Pagination: FC<PaginationProps> = ({ page, setPage, pages }) => {

    const isFirstPage = page === 1
    const isLastPage = page === pages

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])

    return (
        <>
            {
                (pages !== 1) && (
                    <div className={cl.Root} data-testid="pagination" >
                        <Button
                            data-testid="pagination-first-btn"
                            onClick={() => setPage(1)}
                            className={[cl.Btn, cl.Left].join(' ')}
                            disabled={isFirstPage}
                        >1</Button>
                        <Button
                            data-testid="pagination-prev-btn"
                            onClick={() => setPage(page - 1)}
                            className={cl.Btn}
                            disabled={isFirstPage}
                        >Prev</Button>
                        <span
                            data-testid="pagination-value"
                            className={cl.Value}
                        > { page } / { pages } </span>
                        <Button
                            data-testid="pagination-next-btn"
                            onClick={() => setPage(page + 1)}
                            className={cl.Btn}
                            disabled={isLastPage}
                        >Next</Button>
                        <Button
                            data-testid="pagination-first-btn"
                            onClick={() => setPage(Number(pages))}
                            className={[cl.Btn, cl.Right].join(' ')}
                            disabled={isLastPage}
                        >{pages}</Button>
                    </div>
                )
            }
        </>
    );
};

export default memo(Pagination);