#' Get Skills
#'
#' # To server functions as API endpoints:
#' # 1. Build
#' # 2. opencpu::ocpu_start_server()
#' #
#' # Endpoint to call function: (see https://www.opencpu.org/api.html#api-json)
#' # curl http://localhost:5656/ocpu/library/rd3server/R/get_skills/json -d "toadd=c('React', 'd3', 'Redux')"
#'
#'
#' @param toadd Skills to add.
#'
#' @return
#' @export
#'
#' @examples
get_skills <- function(toadd) {
  return(c('HTML', 'Javascript', 'R', toadd))
}
