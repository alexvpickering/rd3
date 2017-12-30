#' Get Skills
#'
#' # To server functions as API endpoints:
#' # 1. Build
#' # 2. opencpu::ocpu_start_server()
#' #
#' # Endpoint to call function: (see https://www.opencpu.org/api.html#api-json)
#' # curl http://localhost:5656/ocpu/library/rd3server/R/abcs/json
#'
#'
#' @param toadd Skills to add.
#'
#' @return
#' @export
#'
#' @examples
abcs <- function() {
  nletters <- sample(20, 1)
  return(sample(letters, nletters))
}
