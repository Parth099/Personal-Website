variable "default_labels" {
  type = map(string)
  default = {
    environment = "dev"
    app         = "personal-website"
    sprint      = 4
  }
}

variable "vpc_info" {
  type = map(any)
  default = {
    "vpc_name" = "personal-website_primary_vpc"
    "vpc_cidr" = "10.0.0.0/16"
  }
}

variable "exposed_ecs_ports" {
  type    = list(number)
  default = [3000]
}

#! Full deployment
variable "is_full_deployment" {
  type        = bool
  default     = true
  description = "When we want a full deployment with LBs and ECS FG Services, set to true"
}

variable "vpc_subnet_info" {
  type = map(list(string))
  default = {
    "azs"                   = ["us-east-1a", "us-east-1b"]
    "private_subnet_blocks" = ["10.0.128.0/18", "10.0.192.0/18"]
    "public_subnet_blocks"  = ["10.0.0.0/18", "10.0.64.0/18"]
  }
}

variable "ecs_cluster_info" {
  type = map(string)
  default = {
    name : "personal-website-backend-cluster"

  }
}

variable "ecs_backend_container_info" {
  type = map(any)
  default = {
    container_name : "personal-website-c"
    container_port : 3000
    desired_count : 1

  }
}

variable "docker_image_info" {
  type = map(string)
  default = {
    "name" = "parth099/personal-website:0.0.3"
  }
}

variable "backend_service_info" {
  type = map(string)
  default = {
    "name" = "personal-website-service"
  }
}

variable "r53_domain_info" {
  type = map(string)
  default = {
    cert_domain = "personal-website.backend-aws.com"
    domain      = "backend-aws.com"
  }
}
