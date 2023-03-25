from diagrams import Diagram, Cluster
from diagrams.aws.compute import ElasticBeanstalk
from diagrams.aws.database import Dynamodb
from diagrams.aws.network import Route53, CloudFront, ALB
from diagrams.aws.storage import S3

with Diagram("ownyourday", show=False):
    with Cluster("web-tier"):
        dns = Route53("Route53")
        cdn = CloudFront("CloudFront")
        spa_artifact = S3("S3")

    with Cluster("api-tier"):
        load_balancer = ALB("Load Balancer")
        with Cluster("ownyourday-api"):
            api_group = [
                ElasticBeanstalk("Elastic Beanstalk"),
                ElasticBeanstalk("Elastic Beanstalk"),
                ElasticBeanstalk("Elastic Beanstalk"),
            ]

    database = Dynamodb("DynamoDB")

    dns >> cdn >> spa_artifact
    spa_artifact >> load_balancer >> api_group >> database
