 namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
    using System;
    using System.Web.SessionState;
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class ConcertsService : BaseService, IReadOnlySessionState
    {
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
	public decimal GetTotalDurationByConcertCode(string concertCode)
        {
            if (string.IsNullOrEmpty(concertCode))
            {
                return -1;
            }
            Select concertSelect = new Select(UserConnection)
	            .Column("Id")
                .From("UsrConcerts")
				.Where("UsrCode").IsEqual(Column.Parameter(concertCode))
                as Select;

			Guid concertId = concertSelect.ExecuteScalar<Guid>();

			if (concertId == Guid.Empty)
			{
				return -1;
			}

			Select durationSelect = new Select(UserConnection)
				.Column(Func.Sum("UsrDurationMinutes"))
				.From("UsrPerformances")
				.Where("UsrParentConcertId").IsEqual(Column.Parameter(concertId))
				as Select;
			
			int result = durationSelect.ExecuteScalar<int>();
			return result;
        }
		[OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string GetExample()
        {
            return "OK!";
        }

    }
}
