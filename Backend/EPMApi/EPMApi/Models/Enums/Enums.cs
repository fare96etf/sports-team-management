using System.ComponentModel;

namespace EPMApi.Models.Enums
{
    public static class Enums
    {
        public enum GameOutcome
        {
            [Description("Win")]
            W = 0,
            [Description("Draw")]
            D = 1,
            [Description("Loss")]
            L = 2,
            [Description("WinOvertime")]
            WO = 3,
            [Description("LossOvertime")]
            LO = 4,
            [Description("WinPenalties")]
            WP = 5,
            [Description("LossPenaties")]
            LP = 6
        }
    }
}
