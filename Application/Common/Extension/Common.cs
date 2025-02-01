using Domain.Enum;
using MediatR;
using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace Application.Common.Extension;
public static class Common
{
    public static string GetName(this Enum item)
    {
        FieldInfo? fieldInfo = item.GetType().GetField(item.ToString());
        DisplayAttribute? attribute = fieldInfo!.GetCustomAttribute<DisplayAttribute>();
        return attribute != null ? attribute.Name! : item.ToString(); 
    }
}
