import React from 'react'
import styled from 'styled-components'
import {usePagination, useTable} from 'react-table'
import Avatar, {ConfigProvider} from "react-avatar";
import {data1} from './Data'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    


    tr {
    
      height: 70px;
  width: 1318px;
      color: #4A4A4A;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 500;
      line-height: 19px;
      :first-child {
     td{border-top: 2px solid rgba(143,143,143,0.2);}
      
      }
      :last-child {
      
        td {
        color: green;
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      
      :first-child{ 
      font-weight: bold;      
      border-left: 2px solid rgba(143,143,143,0.2);
      };
      :second-child{color: green};
      :last-child {
      border-right: 2px solid rgba(143,143,143,0.2);     
      }
    }
  }
`

// Use the useTable hook to create your table configuration
console.log("data is " + JSON.stringify(data1))
let data = data1

function CustomTable(props) {
    function Table({columns, data}) {
        // Use the state and functions returned from useTable to build your UI
        let {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            prepareRow,
            page, // Instead of using 'rows', we'll use page,
            // which has only the rows for the active page

            // The rest of these things are super handy, too ;)
            canPreviousPage,
            canNextPage,
            pageOptions,
            pageCount,
            gotoPage,
            nextPage,
            previousPage,
            setPageSize,
            state: {pageIndex, pageSize},
        } = useTable(
            {
                columns,
                data,
                initialState: props.initialStateDict,
            },
            usePagination
        )

        // Render the UI for your table
        return (
            <>
      <pre>
        <code>
          {JSON.stringify(
              {
                  pageIndex,
                  pageSize,
                  pageCount,
                  canNextPage,
                  canPreviousPage,
              },
              null,
              2
          )}
        </code>
      </pre>
                <table {...getTableProps()}>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                {/*
        Pagination can be built however you'd like.
        This is just a very basic UI implementation:
      */}
                <div className="pagination">
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        {'<<'}
                    </button>
                    {' '}
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        {'<'}
                    </button>
                    {' '}
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        {'>'}
                    </button>
                    {' '}
                    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        {'>>'}
                    </button>
                    {' '}
                    <span>
          Page{' '}
                        <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
                    <span>
          | Go to page:{' '}
                        <input
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            style={{width: '100px'}}
                        />
        </span>{' '}
                    <select
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                    >
                        {[10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </>
        )
    }

    let mainContentStyle = {
        height: "16px",
        width: "144px",
        color: "red",
        fontFamily: "Roboto",
        fontSize: "14px",
        lineHeight: "19px"
    }

    let colors = ['black', 'green', 'blue']


    const columns = [
        {
            Header: '',
            accessor: 'profileImage',
            Cell: ({row}) => {
                return (
                    <div>
                            <span className="class-for-name" style={{height: "16px"}}><ConfigProvider
                                colors={colors}><Avatar name={row.original.candidateName} size="30"
                                                        round={true}/></ConfigProvider></span>
                    </div>
                )
            }
        },
        {
            /*Header: ' ',
            columns: [
                {*/
            Header: 'Candidate',
            accessor: 'candidateName',
            Cell: ({row}) => {
                return (
                    <div>
                            <span className="class-for-name"
                                  style={{height: "16px"}}>{row.original.candidateName}</span>
                        <br></br>
                        <span className="class-for-description"
                              style={{color: "#909090"}}>{row.original.candidateEmail}</span>
                    </div>
                )
            }
        },
        {
            Header: 'Candidate ID',
            id: "candidateId",
            accessor: "candidateId",
            ignoreRowClick: true,
            Cell: ({row}) => <a href={row.original.candidateId} onClick={() => {
            }}>{row.original.candidateId}</a>,

        },
        {
            Header: 'Organization',
            accessor: 'organization',
            Cell: ({row}) => {
                return (
                    <div>
                            <span onMouseOver={() => {
                                console.log("henlo")
                            }} className="class-for-name" style={{height: "16px"}}>{row.original.organization}</span>
                        <br></br>
                        <span className="class-for-description"
                              style={{color: "#909090"}}>{row.original.organization}</span>
                    </div>
                )
            }
        },
        {
            Header: 'Assessment',
            accessor: 'assessment',
            Cell: ({row}) => {
                return (
                    <div>
                        <span className="class-for-name" style={{height: "16px"}}>{row.original.assessment}</span>
                        <br></br>
                        <span className="class-for-description"
                              style={{color: "#909090"}}>{row.original.assessmentId}</span>
                    </div>
                )
            }
        },
        {
            Header: 'Created Date',
            accessor: 'createdDate',
        },
        {
            Header: 'External ID',
            accessor: 'externalId',
        },
        {
            Header: 'Last Activity',
            accessor: 'lastActivity',
            Cell: ({row}) => {
                return (
                    <div>
                        <span className="class-for-name" style={{height: "16px"}}>{row.original.lastActivity}</span>
                        <br></br>
                        <span className="class-for-description"
                              style={{color: "#909090"}}>{row.original.lastActivityDate}</span>
                    </div>
                )
            }
        },
    ]

    /*const data = React.useMemo(() => makeData(20), [])*/


    return (
        <Styles>
            <Table columns={columns} data={data}/>
        </Styles>
    )
}

export default CustomTable