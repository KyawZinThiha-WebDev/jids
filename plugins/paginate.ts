export default defineNuxtPlugin(() => {
    return {
        provide: {
            paginate: (rawData: any, {currentGroup, pageSize, pageNumber}:{currentGroup: number, pageSize: number, pageNumber: number}) => {

                const currentData = rawData[currentGroup - 1]
                const data = {
                    department: null,
                    jobs: []
                }
                
                const totalGroup = rawData.length;
                const totalPage = Math.ceil(currentData.jobs.length / pageSize);
                
                data.department = currentData.department;
                data.jobs = currentData.jobs.slice(pageSize * (pageNumber - 1), pageSize * pageNumber);
                
                const nextPage = pageNumber >= totalPage ? 1 : pageNumber + 1;
                const nextGroup = pageNumber >= totalPage ? currentGroup >= totalGroup ? 1 : currentGroup + 1 : currentGroup;
                
                return {data, nextPage, nextGroup};
            }
        }
    }
})