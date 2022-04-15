import { Box, Stack, Text } from "@chakra-ui/react"
import { PaginationItem } from "./Paginationitem";

interface PaginationProps{
    totalCountOfRegisters:number;
    registersPerPage?:number;
    currentPage?:number;
    onPageChange:(page:number)=>void
}

const siblingsCount=1

function generatePagesArray(from:number,to:number){
    return [...new Array(to-from)].map((value,index)=>(
        from+index+1
    )).filter(page=>page>0)
}


export function Pagination({onPageChange,totalCountOfRegisters,currentPage=1,registersPerPage=10}:PaginationProps){

    const lastPage= Math.ceil(totalCountOfRegisters/registersPerPage)

    const previousPage=currentPage > 1 ? generatePagesArray(currentPage-1-siblingsCount,currentPage-1) : []

    const nextPages= currentPage < lastPage ? generatePagesArray(currentPage,Math.min(currentPage+siblingsCount,lastPage)) : []

    return(
      <Stack direction={['column','row']} spacing='6' mt='8' justify={'space-between'} align='center'>
          <Box>
              <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
          </Box>
          <Stack direction={'row'} spacing='2'>
              
        {
            currentPage > ( 1 + siblingsCount ) && (
                <>
						<PaginationItem  number={1} />
						{currentPage > 2 + siblingsCount && (
							<Text color="gray.300" w="8" textAlign="center">
								...
							</Text>
						)}
					</>
            )
        }

          {previousPage.length > 0 &&
					previousPage.map((page) => {
						return (
							<PaginationItem
								number={page}
								key={page}
							/>
						);
					})}

				<PaginationItem
					number={currentPage}
					isCurrent
				/>

				{nextPages.length > 0 &&
					nextPages.map((page) => (
						<PaginationItem
							number={page}
							key={page}
						/>
					))}

        {
            currentPage + siblingsCount < lastPage && (
                <>
						{currentPage + 1 + siblingsCount < lastPage && (
							<Text color="gray.300" w="8" textAlign="center">
								...
							</Text>
						)}
						<PaginationItem  number={lastPage} />
					</>
            )
        }   

          </Stack>

      </Stack>
    )
}