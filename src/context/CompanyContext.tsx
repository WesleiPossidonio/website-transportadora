
import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
// import { toast } from 'react-toastify'
import api from '../Services/api'


export interface DataPostInstagramProps {
  id: string;
  username: string;
  caption: string;
  media_type: "VIDEO" | "IMAGE";
  media_url: string;
  permalink: string;
  timestamp: string;
  thumbnail_url: string;
  like_count: string
  comments_count: string
}

interface ListCompanyType {
  feedInstagramData: DataPostInstagramProps[]
}

interface ListCompanyProps {
  children: ReactNode
}


export const CompanyContext = createContext({} as ListCompanyType)

export const ListCompanyProvider = ({ children }: ListCompanyProps) => {
  const [feedInstagramData, setFeedInstagramData] = useState<DataPostInstagramProps[]>([])

  const getFeedIntagram = useCallback(async () => {
    try {
      const response = await api.get('feedInsta')
      const { data } = response

      setFeedInstagramData(data.data)
    } catch (error) {
      console.log("Error ao buscar o feed do instagram =>", error);
    }
  }, [])

  useEffect(() => {
    getFeedIntagram()
  }, [getFeedIntagram])


  return (
    <CompanyContext.Provider
      value={{
        feedInstagramData,
      }}
    >
      {children}
    </CompanyContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDataCompany = () => {
  const context = useContext(CompanyContext)
  return context
}